class ActionStatus {
  ack: AcknowledgeState;
  last_execution: ExecutionState;
  last_successful_execution: ExecutionState;
  last_throttle: ThrottleState;
}
