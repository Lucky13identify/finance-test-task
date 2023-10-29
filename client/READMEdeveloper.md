## This application utilizes the following core technology stack: React, Redux Toolkit, Socket.io, and API. 

Once you've started the server, frontend, and tests (follow the instructions in the README.md file), you can use the application's functionality.

1. Users can delete unwanted tickers and keep only the ones they want to see. Upon removal, the user will receive a notification specifying the ticker that has been removed. After refreshing the page, all removed tickers will be restored.
![Delete IMG](./readme_imgs/delete.png)

2. In the input field, the user can set the refresh interval for tickers by specifying a value in seconds. After doing so, the user will receive a corresponding notification indicating the interval they've set.
![Interval IMG](./readme_imgs/setInterval.png)