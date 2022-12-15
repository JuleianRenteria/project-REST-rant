# Project REST-Rant

REST-Rant is an app where users can review restaurants.
                    ROUTES
# | Method | path           | purpose                                       |  
# |------  |----------------|-----------------------------------------------|  
# | GET    |/               |home page                                      |
# | GET    |/places         |places index page                              |
# | POST   |/places         |create new place                               |
# | GET    |/places/new     |form page for creating a new place             |
# | GET    |/places/:id     |details about a particular place               |
# | PUT    |/places/:id     |update a particular place                      | 
# | GET    |/places/:id/edit|form page for editing an existing place        |
# |DELETE  |/places:id      |delete a particular place                      |
# |GET     |*               |create a rant(comment) about a particular place|

Database
  Field   |  Type   |
---       |---      |
_id       |Object ID|  
name      |string   |  
city      |string   |  
state     |string   |    
cuisines  |string   |  
pic       |string   |  
