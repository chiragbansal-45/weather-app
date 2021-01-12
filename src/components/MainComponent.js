import React, {Component} from 'react';
import Header from './HeaderComponent';
import Search from './SearchComponent';
import WeatherInfo from './CardComponent';
import Footer from './FooterComponent';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchBarInput: '',
            details: {
                temprature: null,
                description: ''
            }
        }
    }
        onChange=(e) => {
            this.setState({searchBarInput: e.target.value})
            console.log(this.state.searchBarInput);
        }
        setWeather=() => {
            
            const city = this.state.searchBarInput;
            const API_KEY = 'd302d98fe71b4661c7d0b51f198888df';
            const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
            const URL = API_URL + `?q=${city}&appid=${API_KEY}&units=metric`;
           
                    fetch(URL)
                    .then(response => {
                        if (response.ok) {
                            return response;
                        }
                    }, error => {
                        throw error;
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.cod === 200) {
                            this.setState({
                                details: {
                                    temprature: data.main.temp,
                                    description: data.weather[0].main
                                }
                                
                            });
                            console.log(this.state.details.temprature)
                        
                        }
                        else{
                            throw data.cod;
                        }  
                    })
                
            
        }
    
    render(){
        console.log(this.state);
        return(
            <div>
                <Header />
                <Search value={this.state.searchBarInput} 
                        onChange={this.onChange}
                        onClick={this.setWeather}/>
                <WeatherInfo data={this.state.details}/>
                <Footer />
            </div>
        )
    }
}
export default Main;