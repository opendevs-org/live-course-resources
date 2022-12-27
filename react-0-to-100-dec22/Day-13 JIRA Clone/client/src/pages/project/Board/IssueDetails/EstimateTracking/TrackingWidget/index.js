import React from "react"
import { isNil } from "lodash"
import { TrackingWidget, WatchIcon, Right, BarCont, Bar, Values } from "./styles"

const ProjectBoardIssueDetailsTrackingWidget = ({ issue }) => (
  <TrackingWidget>
    <WatchIcon type="stopwatch" size={26} top={-1} />
    <Right>
      <BarCont>
        <Bar width={calculateTrackingBarWidth(issue)} />
      </BarCont>
      <Values>
        <div>{issue.timeSpent ? `${issue.timeSpent}h logged` : "No time logged"}</div>
        {renderRemainingOrEstimate(issue)}
      </Values>
    </Right>
  </TrackingWidget>
)

const calculateTrackingBarWidth = ({ timeSpent, timeRemaining, estimate }) => {
  if (!timeSpent) {
    return 0
  }
  if (isNil(timeRemaining) && isNil(estimate)) {
    return 100
  }
  if (!isNil(timeRemaining)) {
    return (timeSpent / (timeSpent + timeRemaining)) * 100
  }
  if (!isNil(estimate)) {
    return Math.min((timeSpent / estimate) * 100, 100)
  }
}

const renderRemainingOrEstimate = ({ timeRemaining, estimate }) => {
  if (isNil(timeRemaining) && isNil(estimate)) {
    return null
  }
  if (!isNil(timeRemaining)) {
    return <div>{`${timeRemaining}h remaining`}</div>
  }
  if (!isNil(estimate)) {
    return <div>{`${estimate}h estimated`}</div>
  }
}

export { ProjectBoardIssueDetailsTrackingWidget }
