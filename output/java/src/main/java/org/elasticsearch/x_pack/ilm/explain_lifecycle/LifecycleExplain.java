
package org.elasticsearch.x_pack.ilm.explain_lifecycle;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_options.time_unit.*;

public class LifecycleExplain  implements XContentable<LifecycleExplain> {
  
  static final ParseField ACTION = new ParseField("action");
  private String _action;
  public String getAction() { return this._action; }
  public LifecycleExplain setAction(String val) { this._action = val; return this; }

  static final ParseField ACTION_TIME_MILLIS = new ParseField("action_time_millis");
  private Date _actionTimeMillis;
  public Date getActionTimeMillis() { return this._actionTimeMillis; }
  public LifecycleExplain setActionTimeMillis(Date val) { this._actionTimeMillis = val; return this; }

  static final ParseField AGE = new ParseField("age");
  private String _age;
  public String getAge() { return this._age; }
  public LifecycleExplain setAge(String val) { this._age = val; return this; }

  static final ParseField FAILED_STEP = new ParseField("failed_step");
  private String _failedStep;
  public String getFailedStep() { return this._failedStep; }
  public LifecycleExplain setFailedStep(String val) { this._failedStep = val; return this; }

  static final ParseField FAILED_STEP_RETRY_COUNT = new ParseField("failed_step_retry_count");
  private int _failedStepRetryCount;
  private boolean _failedStepRetryCount$isSet;
  public int getFailedStepRetryCount() { return this._failedStepRetryCount; }
  public LifecycleExplain setFailedStepRetryCount(int val) {
    this._failedStepRetryCount = val;
    _failedStepRetryCount$isSet = true;
    return this;
  }

  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public LifecycleExplain setIndex(String val) { this._index = val; return this; }

  static final ParseField IS_AUTO_RETRYABLE_ERROR = new ParseField("is_auto_retryable_error");
  private Boolean _isAutoRetryableError;
  public Boolean getIsAutoRetryableError() { return this._isAutoRetryableError; }
  public LifecycleExplain setIsAutoRetryableError(Boolean val) { this._isAutoRetryableError = val; return this; }

  static final ParseField LIFECYCLE_DATE_MILLIS = new ParseField("lifecycle_date_millis");
  private Date _lifecycleDateMillis;
  public Date getLifecycleDateMillis() { return this._lifecycleDateMillis; }
  public LifecycleExplain setLifecycleDateMillis(Date val) { this._lifecycleDateMillis = val; return this; }

  static final ParseField MANAGED = new ParseField("managed");
  private Boolean _managed;
  public Boolean getManaged() { return this._managed; }
  public LifecycleExplain setManaged(Boolean val) { this._managed = val; return this; }

  static final ParseField PHASE = new ParseField("phase");
  private String _phase;
  public String getPhase() { return this._phase; }
  public LifecycleExplain setPhase(String val) { this._phase = val; return this; }

  static final ParseField PHASE_TIME_MILLIS = new ParseField("phase_time_millis");
  private Date _phaseTimeMillis;
  public Date getPhaseTimeMillis() { return this._phaseTimeMillis; }
  public LifecycleExplain setPhaseTimeMillis(Date val) { this._phaseTimeMillis = val; return this; }

  static final ParseField POLICY = new ParseField("policy");
  private String _policy;
  public String getPolicy() { return this._policy; }
  public LifecycleExplain setPolicy(String val) { this._policy = val; return this; }

  static final ParseField STEP = new ParseField("step");
  private String _step;
  public String getStep() { return this._step; }
  public LifecycleExplain setStep(String val) { this._step = val; return this; }

  static final ParseField STEP_INFO = new ParseField("step_info");
  private NamedContainer<String, Object> _stepInfo;
  public NamedContainer<String, Object> getStepInfo() { return this._stepInfo; }
  public LifecycleExplain setStepInfo(NamedContainer<String, Object> val) { this._stepInfo = val; return this; }

  static final ParseField STEP_TIME_MILLIS = new ParseField("step_time_millis");
  private Date _stepTimeMillis;
  public Date getStepTimeMillis() { return this._stepTimeMillis; }
  public LifecycleExplain setStepTimeMillis(Date val) { this._stepTimeMillis = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_action != null) {
      builder.field(ACTION.getPreferredName(), _action);
    }
    if (_actionTimeMillis != null) {
      builder.field(ACTION_TIME_MILLIS.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_actionTimeMillis.toInstant()));
    }
    if (_age != null) {
      builder.field(AGE.getPreferredName(), _age);
    }
    if (_failedStep != null) {
      builder.field(FAILED_STEP.getPreferredName(), _failedStep);
    }
    if (_failedStepRetryCount$isSet) {
      builder.field(FAILED_STEP_RETRY_COUNT.getPreferredName(), _failedStepRetryCount);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_isAutoRetryableError != null) {
      builder.field(IS_AUTO_RETRYABLE_ERROR.getPreferredName(), _isAutoRetryableError);
    }
    if (_lifecycleDateMillis != null) {
      builder.field(LIFECYCLE_DATE_MILLIS.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_lifecycleDateMillis.toInstant()));
    }
    if (_managed != null) {
      builder.field(MANAGED.getPreferredName(), _managed);
    }
    if (_phase != null) {
      builder.field(PHASE.getPreferredName(), _phase);
    }
    if (_phaseTimeMillis != null) {
      builder.field(PHASE_TIME_MILLIS.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_phaseTimeMillis.toInstant()));
    }
    if (_policy != null) {
      builder.field(POLICY.getPreferredName(), _policy);
    }
    if (_step != null) {
      builder.field(STEP.getPreferredName(), _step);
    }
    if (_stepInfo != null) {
      builder.field(STEP_INFO.getPreferredName());
      _stepInfo.toXContent(builder, params);
    }
    if (_stepTimeMillis != null) {
      builder.field(STEP_TIME_MILLIS.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_stepTimeMillis.toInstant()));
    }
  }

  @Override
  public LifecycleExplain fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return LifecycleExplain.PARSER.apply(parser, null);
  }

  public static final ObjectParser<LifecycleExplain, Void> PARSER =
    new ObjectParser<>(LifecycleExplain.class.getName(), false, LifecycleExplain::new);

  static {
    PARSER.declareString(LifecycleExplain::setAction, ACTION);
    PARSER.declareObject(LifecycleExplain::setActionTimeMillis, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), ACTION_TIME_MILLIS);
    PARSER.declareString(LifecycleExplain::setAge, AGE);
    PARSER.declareString(LifecycleExplain::setFailedStep, FAILED_STEP);
    PARSER.declareInt(LifecycleExplain::setFailedStepRetryCount, FAILED_STEP_RETRY_COUNT);
    PARSER.declareString(LifecycleExplain::setIndex, INDEX);
    PARSER.declareBoolean(LifecycleExplain::setIsAutoRetryableError, IS_AUTO_RETRYABLE_ERROR);
    PARSER.declareObject(LifecycleExplain::setLifecycleDateMillis, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), LIFECYCLE_DATE_MILLIS);
    PARSER.declareBoolean(LifecycleExplain::setManaged, MANAGED);
    PARSER.declareString(LifecycleExplain::setPhase, PHASE);
    PARSER.declareObject(LifecycleExplain::setPhaseTimeMillis, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), PHASE_TIME_MILLIS);
    PARSER.declareString(LifecycleExplain::setPolicy, POLICY);
    PARSER.declareString(LifecycleExplain::setStep, STEP);
    PARSER.declareObject(LifecycleExplain::setStepInfo, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), STEP_INFO);
    PARSER.declareObject(LifecycleExplain::setStepTimeMillis, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), STEP_TIME_MILLIS);
  }

}
