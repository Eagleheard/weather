

const OnLoadingWeatherData =(Component) =>{
    return function LoadingWeatherData({isLoading, ...props}) {
        if (!isLoading) return <Component {...props} />
        else return (
            <>
            <h1>Подождите, данные грузятся</h1>
            </>
        )
    }
}
export default OnLoadingWeatherData;