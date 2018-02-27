# Overage Billing App - Segment
This app was designed and built according to a real problem Segment encountered (albeit most of the complexity has been stripped away to make this a reasonably short project).
## The Problem:
  * Segment is a SaaS company, and some of our customers are designated as “Business Tier” customers. They have signed up for our service based on estimated usage of the product (in API calls), and they usually pay us annually up front. But some of our customers use more than their allotted API calls, so we need a way for our teams to bill them for the additional usage. For example, a customer’s estimated usage in their contract is 100,000 API/Month, their negotiated rate for overages is $0.01/API, and they used 150,000 API in November. Then we need to bill the overage of 50,000 * $0.01 = $500 for November.
## The Rules:
  * We don’t charge any overages for the first 3 months of the service. This is because we recognize that new customers may have to bring in some data from other systems and we want to grant them a period to do so.
  * We also don’t charge customer overages if their Segment Customer Success Manager makes a determination that it is not in the best interest of the customer nor Segment to charge them. This determination is actually done within the application you build.
  * Sales is also a stakeholder. Sales teams might be currently working on upselling a service or product to the customer we are billing an overage, which creates a bad experience. So the Sales team also has veto power on billing the overage.
## The Process:
  * Finance is the owner of this process. They will be the ones that will generate a DRAFT bill.
  * The DRAFT bill is then routed to Success’s queue for approval from Success. Success can APPROVE or REJECT the bill. Then the application will collect the reason and put the bill in a WRITEOFF status or move it forward in the workflow.
  * If Success approved the bill, then it moves to the Sales queue. Sales can also APPROVE/REJECT the bill with a reason. If REJECTED the bill goes to a WRITEOFF status if APPROVED the bill goes to a FINAL status.
  * Once the Bill is in a FINAL status, Finance will send the bill to the customer. This could be done as a PDF attachment or by sending the bill to a 3rd party system. For our purposes, assume you are sending this request as a JSON object to a Webhook endpoint. Once the Bill has been sent to the Customer, the Bill should move to SENT status.


## Thought Process And Progression
  1. The first challenge I tackled was considering how the database should be setup.  After some brainstorming, I created a schema I felt worked well for the problem, could be used for other purposes, and did not duplicate data.  
    * All customers have their basic information stored in the database.  This data does not change, or would not change frequently. Columns include:
      * Name
      * Email
      * Address
      * Monthly API Limit
      * Overage Unit Cost
      * Tier
      * Annual Payment
      * Start Date (as customer)
      * Latest Billing Date
      * Outstanding Balance
    * I then considered how to handle billing. Because Billing is related to monthly usage but not specific to it, I thought it would be good to separate the two into two tables, Usage Entries and Bills.
    * Usage Entries Table includes:
      * Start Date
      * End Date
      * Usage (in api calls)
      * CustomerID
    * Bills Table includes:
      * Usage Entry ID
      * Customer ID
      * Status
      * Amount
      * Paid in Full
      * Explanation
      * Writeoff Approver
    * An assumption I made was that usage entries would be a collection of all the customer's API usage and the LAST entry would be the one used to determine the customer's bill and if an overage occurred.  This will work as long as usage entries are generated monthly and all new overages have an action taken on them within a month.
    * I also made the assumption that usage entries as well as bills should be collected in the database. Because bills can be written off, it made sense to me to store bill information.  If bills were never written off, usage entries could be used exclusively to calculate bills, and therefore, a bills table would not be necessary. This way, Segment could review all the bills actually submitted to the customer as well as bills that were written off by Segment.
  2. Next I considered how I wanted to approach the UI.  In an ideal app, Finance, Success, and Sales would all have their own access, and wouldn't be able to access the same kind of functionality.  For the sake of simplicity, I made this app from the perspective of an admin, who would have universal access. In a real world scenario, I would implement:
    * User Authentication:
      * Through Authentication of employees, you can protect this information from external threats, validate who approved/wrote off bills, and what department these employees belong too.
      * Because of time constraints, I did not implement authentication or an employees tables, which would store information such as:
        * Name
        * Department
        * Password Digest
        * Session Token
        * Etc...
  3. Implementing Finance
    * Because Finance is the owner of the process, and has more functionality, I decided to separate their views into 4 categories:
      * New Overages - where only customers with overages in the last month are displayed
      * Writeoffs - where finance could view bills that have been written off, by whom, and why.  
        * Made assumption that Finance would not be able to override a writeoff.
      * Ready To Bill - where Finance would actually send the bill to the customer
      * Billed - where finance could see the (hypothetical) status of whether a bill has been paid. Functionality could be added to mark bill as 'closed'.
    4. Implementing Sales and Success
      * Because Sales and Success have the same process for writing off or approving bills, their functionality is identical.  
        * TODO: Dry up code by reusing duplicate code.


## Technical Features
On the backend, I did not want to retrieve all the usage entry data for every customer, just the last usage entry. I successfully accomplished this with the following SQL query

  ``` SQL
  SELECT *
  FROM customers as c
  WHERE c.monthly_api_limit < (
      SELECT usage FROM usage_entries as u
      JOIN customers ON customers.id = customer_id
      WHERE customer_id = customers.id
      ORDER BY u.id DESC
      LIMIT 1
    )
  ```

## Future Concepts / Functionality to Add
During my 3 day course of development, I discovered many more implementations that can deliver more functionality and a better experience listed below:

#### Sort By Last Updated
Currently, there is no sorting done by last updated entries in the database. This would improve the experience as oldest entries should be handled first.

#### Employee Table and Authentication
As described above, this would be implemented in a production application, but for simplicity and time sake, was not implemented here.

#### Deployment
I would have preferred to deploy this application with heroku, to have the ability to view this app from any machine but have some bug finding to do as to why heroku deployments are failing. Suspect it has something to do with new React update.
