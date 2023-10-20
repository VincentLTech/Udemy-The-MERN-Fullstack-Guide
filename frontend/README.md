1. npx create-react-app client

2. yarn

3. npm install --save react-router-dom(@5 --save-exact)

4. import {BrowserRouter} from 'react-router-dom';//4 Add this after following step 3 in README.md

5. import {Route} from 'react-router-dom';//5 Add this after following step 3 in README.md

6. create a Users.js file and then you can make routes <BrowserRouter>{/* this is used so you can add routes "https:localhost:3000/help" */}<Route path ="/" exact="true">{/*  */}<Users/> </Route></BrowserRouter>

7. Adding a UsersItemComponent
frontend\src\user\components\UserItem.js

8. Styling Our App and more components
frontend\src\shared\components\UIElements\Card.js
frontend\src\shared\components\UIElements\Avatar.js
frontend\src\user\components\UserItem.js
frontend\src\user\components\UsersList.js

9. Presentational vs Stateful Components

10. Addomg a main header
frontend\src\shared\components\Navigation\MainHeader.js
frontend\src\shared\components\Navigation\MainNavigation.js
Created a navigation folder that will contain all the components that will enable the user to navigate the website

11. Adding Navlinks
frontend\src\shared\components\Navigation\NavLinks.js

12. Implementing A Abasic Desktop and Mobile Navigation
frontend\src\shared\components\Navigation\MainNavigation.js
C:\Users\elect\Desktop\Udemy-The MERN Fullstack Guide\frontend\src\shared\components\Navigation\SideDrawer.js

13. Understanding Portals
C:\Users\elect\Desktop\Udemy-The MERN Fullstack Guide\frontend\public\index.html
C:\Users\elect\Desktop\Udemy-The MERN Fullstack Guide\frontend\src\shared\components\Navigation\SideDrawer.js

14. Handling the Drawer State
C:\Users\elect\Desktop\Udemy-The MERN Fullstack Guide\frontend\src\shared\components\Navigation\MainNavigation.js
C:\Users\elect\Desktop\Udemy-The MERN Fullstack Guide\frontend\src\shared\components\UIElements\Backdrop.js
C:\Users\elect\Desktop\Udemy-The-MERN-Fullstack-Guide\Udemy-The-MERN-Fullstack-Guide\frontend\public\index.html

15. Animating the Sidedrawer***********************************
npm install --save react-transition-group
//it is simply a library that makes it easy for us to play a little animation if we add an item to the
C:\Users\elect\Desktop\Udemy-The-MERN-Fullstack-Guide\Udemy-The-MERN-Fullstack-Guide\frontend\src\shared\components\Navigation\SideDrawer.js
C:\Users\elect\Desktop\Udemy-The-MERN-Fullstack-Guide\Udemy-The-MERN-Fullstack-Guide\frontend\src\shared\components\Navigation\MainNavigation.js

16. Rendering User Places & Using Dynamic Route Segments
C:\Users\elect\Desktop\Udemy-The-MERN-Fullstack-Guide\Udemy-The-MERN-Fullstack-Guide\frontend\src\places\components\PlaceList.js
C:\Users\elect\Desktop\Udemy-The-MERN-Fullstack-Guide\Udemy-The-MERN-Fullstack-Guide\frontend\src\places\components\PlaceItem.js
17.

18.

19.

20.

21.

22.

23.

24.

25.

26.


27.

28.

29.



30.

31.

32.

33.

34.

35.

36.

37.

38.

39.

40.

41.

42.

43.

44.

45.

46.

47.

48.

49.

50.

51.

52.

53.

54.

55.

56.

57.

58.

59.

60.

61.

62.

63.

64.

65.

66.

67.
68.
69.
70.
71.
72.
73.
74.
75.
76.
77.
78.
79.
80.
81.
82.
83.
84.
85.
86.
87.
88.
89.
90.
91.
92.
93.
94.
95.
96.
97.
98.
99.
100.
