import React, {Component} from 'react';

class HelloError extends Component {

    render() {
        function throwErr() {
            throw new Error("My manual error");
        }
        // throwErr();
        try{
            throwErr()
        } catch (error) {
            console.log(error.name)
            console.log(error.message);
        }
        return (


            <div>
                HelloError
            </div>
        );
    }
}

export default HelloError;