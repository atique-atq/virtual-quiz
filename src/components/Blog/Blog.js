import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blogs-container'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is the purpose of react router?</Accordion.Header>
                    <Accordion.Body>
                        React router is a dynamic client side routing. It is used for a single page application which allows user to navigate without refreshing the page. As this is preventing page reloading, it gives user a smooth and seamless experience. As react route is declarative, it means we can specify how we want to see our route. For being  asynchronous, instead of loading all at once, we can have the flexibility to load the route on demand. React routes are also used to create complex routing by combining multiple routes together.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How does Context API works?</Accordion.Header>
                    <Accordion.Body>
                    React Context API is a system for creating global varibles the can be effectively passed around. When data are passed from each level of component and so on, it is called 'Prop Drilling'. Context API does exactly the alternative. Context API allows to have the data in a central store. Without passing to each intermediary element, Context API allows any component to use the data from that central store created. In Context API, first we need to create a context using createContext. Then we need to create provider. Finally we need to import the context to wrap the components with itself. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Write about useRef hooks in react.</Accordion.Header>
                    <Accordion.Body>
                    Using useState hook applicatoin renders many times, some cases it renders in an infinite loop as this hook re-renders itself. Here useRef hook allow to hold data between the renders. It persists mutable values which are not re-renders butween the updates. useRef hook could be used to directly access the DOM. useRef  allows to directly make a reference of DOM within functional components. This returns mutable ref object which has .corrent property. Data value is stored in the refContainer.current property. The .current property  initialised to the passing argument initialValue. 
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;