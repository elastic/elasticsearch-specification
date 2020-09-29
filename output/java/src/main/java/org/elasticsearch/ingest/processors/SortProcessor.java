
package org.elasticsearch.ingest.processors;

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
import org.elasticsearch.search.search.sort.*;
import org.elasticsearch.ingest.*;

public class SortProcessor extends ProcessorBase implements XContentable<SortProcessor> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public SortProcessor setField(String val) { this._field = val; return this; }

  static final ParseField ORDER = new ParseField("order");
  private SortOrder _order;
  public SortOrder getOrder() { return this._order; }
  public SortProcessor setOrder(SortOrder val) { this._order = val; return this; }

  static final ParseField TARGET_FIELD = new ParseField("target_field");
  private String _targetField;
  public String getTargetField() { return this._targetField; }
  public SortProcessor setTargetField(String val) { this._targetField = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_order != null) {
      builder.field(ORDER.getPreferredName());
      _order.toXContent(builder, params);
    }
    if (_targetField != null) {
      builder.field(TARGET_FIELD.getPreferredName(), _targetField);
    }
  }

  @Override
  public SortProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SortProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SortProcessor, Void> PARSER =
    new ObjectParser<>(SortProcessor.class.getName(), false, SortProcessor::new);

  static {
    PARSER.declareString(SortProcessor::setField, FIELD);
    PARSER.declareField(SortProcessor::setOrder, (p, t) -> SortOrder.PARSER.apply(p), ORDER, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(SortProcessor::setTargetField, TARGET_FIELD);
  }

}
