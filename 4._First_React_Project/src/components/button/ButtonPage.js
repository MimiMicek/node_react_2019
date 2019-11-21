import React from 'react';
import ButtonWithProps from './ButtonWithProps';
import ButtonWithChild from './ButtonWithChild';
import ButtonWithSecondChild from './ButtonWithSecondChild';
/* import "./ButtonPage.css"
 */
export default class ButtonPage extends React.Component {
    handleButtonClicks = (text) => {
        console.log(text);
    };

  render() {
    return (
        <div>
            This is the button page.
            <ButtonWithProps informButtonPage={this.handleButtonClicks} />
            <ButtonWithProps buttonText="This is my custom button text" customStyle={{backgroundColor: "lightpink"}}/>
            <ButtonWithProps buttonText="This is another button" customStyle={{backgroundColor: "lightblue"}}/>
            {/* passing props through a child */}
            <ButtonWithChild informButtonPage>
                First child  
            </ButtonWithChild>

            <ButtonWithSecondChild>
                I am the second child
            </ButtonWithSecondChild>
        </div>
    );
  }
}