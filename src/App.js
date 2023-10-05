import React from "react";
import "./style.css";
import { Welcome } from "./components/FunctionComponent";
import PropsFn from "./components/PropsFn";
import WelcomeCL from "./components/ClassComponent";
import PropsClass from "./components/PropsClass";
import StateClass from "./components/StateClass";
import CounterClass from "./components/CounterClass";
import EventBinding from "./components/EventBinding";
import Forms from "./components/Forms";
import LifeCycleParent from "./components/LifeCycleParent";
import ParentOfPureComp from "./components/ParentOfPureComp";
import RefClass from "./components/RefClass";
import ParentInput from "./components/ParentInput";
import ForwardingRef from "./components/ForwardingRef";
import PortalDemo from "./components/PortalDemo";
import ClickCounterHOF from "./components/ClickCounterHOF";
import HoverCounterHOF from "./components/HoverCounterHOF";
import ComponentA from "./components/ComponentA";
import { UserProvider } from "./components/userContext";
import ClassMouse from "./components/ClassMouse";
import IntervalClassCounter from "./components/IntervalClassCounter";

import HookCounter from "./hooksComponents/HookCounter";
import HookCounterTwo from "./hooksComponents/HookCounterTwo";
import HookCounterThree from "./hooksComponents/HookCounterThree";
import HookCounterFour from "./hooksComponents/HookCounterFour";
import HookMouse from "./hooksComponents/HookMouse";
import MouseContainer from "./hooksComponents/MouseContainer";
import DataFetching from "./hooksComponents/DataFetching";
import IntervalHookCounter from "./hooksComponents/IntervalHookCounter";
import Quiz from "./quiz/Quiz";

export default function App() {
  return (
    <div>
      {/* <Welcome></Welcome> */}
      {/* <WelcomeCL></WelcomeCL> */}
      {/* <PropsFn name="kushagra" surname="jain">
        <p>This is Children props</p>
      </PropsFn> */}
      {/* <PropsClass name="kushagra"></PropsClass> */}
      {/* <StateClass name="kushagra"></StateClass> */}
      {/* <CounterClass></CounterClass> */}
      {/* <EventBinding></EventBinding> */}
      {/* <Forms></Forms> */}
      {/* <LifeCycleParent></LifeCycleParent> */}
      {/* 
        1) Mounting
          - Constructor
          - static getDerivedStateFromProps
          - render
          - componentDidMount
        2) Updating
          - static getDerivedStateFromProps
          - shouldComponentUpdate (used in PureComponents)
          - render
          - getSnapshotBeforeUpdate
          - componentDidUpdate
        3) Unmounting
          - componentWillUnmount (Cleanup tasks)
        4) Error Handling
          - static getDerivedStateFromError
          - componentDidCatch
      */}
      {/* <ParentOfPureComp></ParentOfPureComp> */}
      {/* <RefClass></RefClass> */}
      {/* <ParentInput></ParentInput> */}
      {/* <ForwardingRef></ForwardingRef> */}
      {/* React Portals provide a way to render childrens into a 
      DOM node that exists outside the DOM hierarchy of the
       parent component */}
      {/* <PortalDemo></PortalDemo> */}
      {/* <ClickCounterHOF code="batman"></ClickCounterHOF>
      <HoverCounterHOF></HoverCounterHOF> */}
      {/* Render Props You can read more on online */}
      {/* <UserProvider value="Kushagra">
        <ComponentA></ComponentA>
      </UserProvider> */}

      {/* <ClassMouse></ClassMouse> */}
      {/* <IntervalClassCounter /> */}

      {/* <HookCounter></HookCounter> */}
      {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <HookCounterThree></HookCounterThree> */}
      {/* <HookCounterFour></HookCounterFour> */}
      {/* <HookMouse></HookMouse> */}
      {/* <MouseContainer /> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter /> */}
      <Quiz />
    </div>
  );
}
