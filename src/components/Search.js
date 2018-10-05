import React, { Component } from 'react';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            position: '',
            background: '',
            top: 0,
            formWidth: ''
        }
    }
    listenScrollEvent = e => {
        if (window.scrollY > 350) {
          this.setState({
              position: 'fixed',
              background: '#1DC1DD',
              top: '50px',
              width: '100%',
              formWidth: '60%'
            })
        } else {
          this.setState({
            position: 'static',
            background: 'transparent',
            top: 0,
            width: '60%',
            formWidth: '100%'
          })
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }
    render() {
        return (
            <div className="search-form-container" style={{position: this.state.position, background: this.state.background, top: this.state.top, width: this.state.width}}>
            <form className="search-form"action="" style={{width: this.state.formWidth}}>
                <input className="search-form__query" type="search" placeholder="Search for anything..."/>
                <select className="search-form__categories" name="search-form__categories" id="search-form__categories">
                    <option value="default">Category</option>
                    <option value="churches">Churches</option>
                    <option value="programs">Programs</option>
                </select>
                <input type="text" className="search-form__location" placeholder="Enter your location..."/>
                <button className="search-form__geocode"></button>
                <input className="search-form__submit" type="submit" value=""/>
            </form>
        </div>
        );
    }
};

export default Search;