# Indogames
A web landing application for our gaming app.

# NOTE
Add node_modules to .gitignore file

# Deploying on tomcat
While deploying on tomcat server, in the 'Webapps' folder create a folder named 'RRCP'. Then make sure while building the application for production in the 'prod-build' custom command we have our '--base-href=/RRCP/' - it is crucial.
