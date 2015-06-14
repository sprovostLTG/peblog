=Theme Configuration Overview

==Gruntfile configs

===js
The gruntfile is set up to concantinate as many files as possible. Basically what happens is the js files are seperated up into footer and header classifications, and thats where they will get enqueued in the DOM. You can control the when they get enqueued by ordering the js files under the "concat" task in the src areas. 
