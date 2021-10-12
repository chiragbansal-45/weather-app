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
            this.setState({searchBarInput: e ? e.target.value: ''});
        }
        setWeather=() => {
            
            const city = this.state.searchBarInput;
            const API_KEY = 'd302d98fe71b4661c7d0b51f198888df';
            const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
            const URL = API_URL + `?q=${city}&appid=${API_KEY}&units=metric`;
           if (city && city.trim().length > 0) {
            fetch(URL)
                .then(response => {
                    if (response.ok) return response;
                    else    return null;
                }, error => {
                    alert("City not found...");
                    console.log(error);
                    return null;
                }).then(response => {
                    if(response)    return response.json();
                }, error => {  
                    console.log(error); 
                    return null;
                }).then(data => {
                    if (data && data.cod === 200) {
                        this.setState({
                            details: {
                                temprature: data.main.temp,
                                description: data.weather[0].main
                            }
                            
                        });
                        console.log(this.state.details.temprature);
                    }
                    else if(data) {
                        throw data.cod;
                    } 
                    else {
                        alert("City not found...");
                        this.onChange(null);
                        this.setState({
                            searchBarInput: '',
                            details: {
                                temprature: null,
                                description: ''
                            }
                            
                        });
                    }     
                });
            }
            else {
                this.setState({
                    details: {
                        temprature: null,
                        description: ''
                    }
                    
                });
            }  
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