
package org.elasticsearch.search.search.sort;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.query_dsl.abstractions.container.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.search.search.sort.*;

public class NestedSort  implements XContentable<NestedSort> {
  
  static final ParseField FILTER = new ParseField("filter");
  private QueryContainer _filter;
  public QueryContainer getFilter() { return this._filter; }
  public NestedSort setFilter(QueryContainer val) { this._filter = val; return this; }

  static final ParseField MAX_CHILDREN = new ParseField("max_children");
  private int _maxChildren;
  private boolean _maxChildren$isSet;
  public int getMaxChildren() { return this._maxChildren; }
  public NestedSort setMaxChildren(int val) {
    this._maxChildren = val;
    _maxChildren$isSet = true;
    return this;
  }

  static final ParseField NESTED = new ParseField("nested");
  private NestedSort _nested;
  public NestedSort getNested() { return this._nested; }
  public NestedSort setNested(NestedSort val) { this._nested = val; return this; }

  static final ParseField PATH = new ParseField("path");
  private String _path;
  public String getPath() { return this._path; }
  public NestedSort setPath(String val) { this._path = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_filter != null) {
      builder.field(FILTER.getPreferredName());
      _filter.toXContent(builder, params);
    }
    if (_maxChildren$isSet) {
      builder.field(MAX_CHILDREN.getPreferredName(), _maxChildren);
    }
    if (_nested != null) {
      builder.field(NESTED.getPreferredName());
      _nested.toXContent(builder, params);
    }
    if (_path != null) {
      builder.field(PATH.getPreferredName(), _path);
    }
  }

  @Override
  public NestedSort fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NestedSort.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NestedSort, Void> PARSER =
    new ObjectParser<>(NestedSort.class.getName(), false, NestedSort::new);

  static {
    PARSER.declareObject(NestedSort::setFilter, (p, t) -> QueryContainer.PARSER.apply(p, t), FILTER);
    PARSER.declareInt(NestedSort::setMaxChildren, MAX_CHILDREN);
    PARSER.declareObject(NestedSort::setNested, (p, t) -> NestedSort.PARSER.apply(p, t), NESTED);
    PARSER.declareString(NestedSort::setPath, PATH);
  }

}
