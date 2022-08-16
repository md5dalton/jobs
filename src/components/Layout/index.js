import React, { Fragment } from 'react'
import Header from "./Header"

export default ({ children }) => (
    <Fragment>
        <Header />
        <main>{children}</main>
    </Fragment>
)