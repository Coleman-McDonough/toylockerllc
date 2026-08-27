"use client"

import { Component, type ReactNode } from "react"

type Props = { children: ReactNode }
type State = { failed: boolean }

export default class ClientErrorBoundary extends Component<Props, State> {
  state: State = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  render() {
    if (this.state.failed) {
      return (
        <section className="relative z-10 px-4 py-28 text-center">
          <h1 className="mb-4 text-2xl font-bold text-black dark:text-white">
            This section could not load
          </h1>
          <p className="text-body-color">
            Call us at (978)-375-7001 and we will help you from there.
          </p>
        </section>
      )
    }
    return this.props.children
  }
}
