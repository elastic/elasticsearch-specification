
package org.elasticsearch.modules.indices.fielddata;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.modules.indices.fielddata.*;

public class Fielddata  implements XContentable<Fielddata> {
  
  static final ParseField FILTER = new ParseField("filter");
  private FielddataFilter _filter;
  public FielddataFilter getFilter() { return this._filter; }
  public Fielddata setFilter(FielddataFilter val) { this._filter = val; return this; }


  static final ParseField LOADING = new ParseField("loading");
  private FielddataLoading _loading;
  public FielddataLoading getLoading() { return this._loading; }
  public Fielddata setLoading(FielddataLoading val) { this._loading = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_filter != null) {
      builder.field(FILTER.getPreferredName());
      _filter.toXContent(builder, params);
    }
    if (_loading != null) {
      builder.field(LOADING.getPreferredName());
      _loading.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Fielddata fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Fielddata.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Fielddata, Void> PARSER =
    new ObjectParser<>(Fielddata.class.getName(), false, Fielddata::new);

  static {
    PARSER.declareObject(Fielddata::setFilter, (p, t) -> FielddataFilter.PARSER.apply(p, t), FILTER);
    PARSER.declareField(Fielddata::setLoading, (p, t) -> FielddataLoading.PARSER.apply(p), LOADING, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
