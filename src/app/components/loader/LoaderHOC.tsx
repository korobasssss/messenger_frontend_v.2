import React, {ComponentType} from "react";
import {connect} from "react-redux";
import LoaderComponent from "@/app/components/loader/LoaderComponent";

interface LoaderState {
    auth: {
        isFetching: boolean
    }
}

interface Loader {
    isFetching: boolean
}

export const LoaderHOC = <P extends object>(WrappedComponent: ComponentType<P>) => {
    const mapStateToProps = (state: LoaderState) => ({
        isFetching: state.auth.isFetching
    });

    const Loader: React.FC<P & Loader> = (props) => {
        const {isFetching, ...rest} = props;

        return (
            <>
                <WrappedComponent {...rest as P}/>
                {props.isFetching ? <LoaderComponent/> : null}
            </>
        )
    };

    // @ts-ignore
    return connect(mapStateToProps)(Loader);
};
