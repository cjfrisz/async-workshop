Polymer("async-workshop-card",{cardTitle:"Name this card",created:function(){"use strict";this.buttons=[]},mouseOverHandler:function(a,b,c){"use strict";c.raisedButton=!0},mouseOutHandler:function(a,b,c){"use strict";c.raisedButton=!1},clickHandler:function(a,b,c){"use strict";window.location.href+="/"+c.getAttribute("href")}});