
package org.elasticsearch.x_pack.ilm.move_to_step;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.ilm.move_to_step.*;
import org.elasticsearch.common_abstractions.request.*;

public class MoveToStepRequest extends RequestBase<MoveToStepRequest> implements XContentable<MoveToStepRequest> {
  
  static final ParseField CURRENT_STEP = new ParseField("current_step");
  private StepKey _currentStep;
  public StepKey getCurrentStep() { return this._currentStep; }
  public MoveToStepRequest setCurrentStep(StepKey val) { this._currentStep = val; return this; }

  static final ParseField NEXT_STEP = new ParseField("next_step");
  private StepKey _nextStep;
  public StepKey getNextStep() { return this._nextStep; }
  public MoveToStepRequest setNextStep(StepKey val) { this._nextStep = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_currentStep != null) {
      builder.field(CURRENT_STEP.getPreferredName());
      _currentStep.toXContent(builder, params);
    }
    if (_nextStep != null) {
      builder.field(NEXT_STEP.getPreferredName());
      _nextStep.toXContent(builder, params);
    }
  }

  @Override
  public MoveToStepRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MoveToStepRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MoveToStepRequest, Void> PARSER =
    new ObjectParser<>(MoveToStepRequest.class.getName(), false, MoveToStepRequest::new);

  static {
    PARSER.declareObject(MoveToStepRequest::setCurrentStep, (p, t) -> StepKey.PARSER.apply(p, t), CURRENT_STEP);
    PARSER.declareObject(MoveToStepRequest::setNextStep, (p, t) -> StepKey.PARSER.apply(p, t), NEXT_STEP);
  }

}
