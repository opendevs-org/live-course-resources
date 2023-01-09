import React from "react"
import { isNil } from "lodash"
import { InputDebounced } from "../../../../../components/InputDebounced"
import { Modal } from "../../../../../components/Modal"
import { Button } from "../../../../../components/Button"
import { ProjectBoardIssueDetailsTrackingWidget } from "./TrackingWidget"
import { SectionTitle } from "../styles"
import {
  TrackingLink,
  ModalContents,
  ModalTitle,
  Inputs,
  InputCont,
  InputLabel,
  Actions,
} from "./styles"

const ProjectBoardIssueDetailsEstimateTracking = ({ issue, updateIssue }) => (
  <>
    <SectionTitle>Original Estimate (hours)</SectionTitle>
    {renderHourInput("estimate", issue, updateIssue)}

    <SectionTitle>Time Tracking</SectionTitle>
    <Modal
      testid="modal:tracking"
      width={400}
      renderLink={(modal) => (
        <TrackingLink onClick={modal.open}>
          <ProjectBoardIssueDetailsTrackingWidget issue={issue} />
        </TrackingLink>
      )}
      renderContent={(modal) => (
        <ModalContents>
          <ModalTitle>Time tracking</ModalTitle>
          <ProjectBoardIssueDetailsTrackingWidget issue={issue} />
          <Inputs>
            <InputCont>
              <InputLabel>Time spent (hours)</InputLabel>
              {renderHourInput("timeSpent", issue, updateIssue)}
            </InputCont>
            <InputCont>
              <InputLabel>Time remaining (hours)</InputLabel>
              {renderHourInput("timeRemaining", issue, updateIssue)}
            </InputCont>
          </Inputs>
          <Actions>
            <Button variant="primary" onClick={modal.close}>
              Done
            </Button>
          </Actions>
        </ModalContents>
      )}
    />
  </>
)

const renderHourInput = (fieldName, issue, updateIssue) => (
  <InputDebounced
    placeholder="Number"
    filter={/^\d{0,6}$/}
    value={isNil(issue[fieldName]) ? "" : issue[fieldName]}
    onChange={(stringValue) => {
      const value = stringValue.trim() ? Number(stringValue) : null
      updateIssue({ [fieldName]: value })
    }}
  />
)

export { ProjectBoardIssueDetailsEstimateTracking }
