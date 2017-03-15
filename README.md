# burger

a burger logger programmed with MySQL, Node, Express, Handlebars and a homemade ORM.  The MVC design pattern is used for this application.  Node and MySQL were used to query and route data in this app, and Handlebars to generate the HTML.


Basic Flow: 
A restaurant app that lets users input the names of burgers they'd like to eat.

Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.

This app will store every burger in a database, whether devoured or not.