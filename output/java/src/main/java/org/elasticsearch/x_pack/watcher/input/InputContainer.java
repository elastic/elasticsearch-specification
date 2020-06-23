
package org.elasticsearch.x_pack.watcher.input;

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
import org.elasticsearch.x_pack.watcher.input.*;

public class InputContainer  implements XContentable<InputContainer> {
  
  static final ParseField CHAIN = new ParseField("chain");
  private ChainInput _chain;
  public ChainInput getChain() { return this._chain; }
  public InputContainer setChain(ChainInput val) { this._chain = val; return this; }


  static final ParseField HTTP = new ParseField("http");
  private HttpInput _http;
  public HttpInput getHttp() { return this._http; }
  public InputContainer setHttp(HttpInput val) { this._http = val; return this; }


  static final ParseField SEARCH = new ParseField("search");
  private SearchInput _search;
  public SearchInput getSearch() { return this._search; }
  public InputContainer setSearch(SearchInput val) { this._search = val; return this; }


  static final ParseField SIMPLE = new ParseField("simple");
  private SimpleInput _simple;
  public SimpleInput getSimple() { return this._simple; }
  public InputContainer setSimple(SimpleInput val) { this._simple = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_chain != null) {
      builder.field(CHAIN.getPreferredName());
      _chain.toXContent(builder, params);
    }
    if (_http != null) {
      builder.field(HTTP.getPreferredName());
      _http.toXContent(builder, params);
    }
    if (_search != null) {
      builder.field(SEARCH.getPreferredName());
      _search.toXContent(builder, params);
    }
    if (_simple != null) {
      builder.field(SIMPLE.getPreferredName());
      _simple.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public InputContainer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return InputContainer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<InputContainer, Void> PARSER =
    new ObjectParser<>(InputContainer.class.getName(), false, InputContainer::new);

  static {
    PARSER.declareObject(InputContainer::setChain, (p, t) -> ChainInput.PARSER.apply(p, t), CHAIN);
    PARSER.declareObject(InputContainer::setHttp, (p, t) -> HttpInput.PARSER.apply(p, t), HTTP);
    PARSER.declareObject(InputContainer::setSearch, (p, t) -> SearchInput.PARSER.apply(p, t), SEARCH);
    PARSER.declareObject(InputContainer::setSimple, (p, t) -> SimpleInput.PARSER.apply(p, t), SIMPLE);
  }

}
