
export const LoaderHoC = (WrappedComponent) => {

    return function Component({ isLoading, data, loader = <p>Loading....</p>, errorText = <p>No data found</p>, ...props }) {
        if (isLoading) {
            return loader;
        }

        if (data.length === 0) {
            return errorText;
        }

        console.log(isLoading, data, props)

        return <WrappedComponent data={data} {...props} />;
    }
}
