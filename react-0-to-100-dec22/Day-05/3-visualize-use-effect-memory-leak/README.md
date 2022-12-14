# Visualize the memory leak in useEffect cleanup

## Steps

1. Run `npm install` to install dependencies in both `react-17-app` and `react-18-app`

2. Run `npm start` in both `react-17-app` and `react-18-app`

3. In browser, open the console and click on the `Show` button

4. Click on the `Hide` button after 10 seconds

5. See warning in `react-17-app` and no warning in `react-18-app`

6. [Read more in changelog](https://github.com/facebook/react/blob/main/CHANGELOG.md) about this change in React 18. Search for `No warning about setState on unmounted components`

## How to fix

In both apps, put this code in `useEffect`:

    ```js
    const interval = setInterval(() => {
        setCount(count => {
            console.log('count: ', count)
            return count + 1
        });
    }, 1000);

    return () => {
        clearInterval(interval);
    };
    ```
