
package org.elasticsearch.document.multiple.reindex_on_server;

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
import org.elasticsearch.common_abstractions.infer.indices.*;
import org.elasticsearch.query_dsl.abstractions.container.*;
import org.elasticsearch.document.multiple.reindex_on_server.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.search.scroll.scroll.*;
import org.elasticsearch.search.search.sort.*;
import org.elasticsearch.common_abstractions.infer.field.*;

public class ReindexSource  implements XContentable<ReindexSource> {
  
  static final ParseField INDEX = new ParseField("index");
  private Indices _index;
  public Indices getIndex() { return this._index; }
  public ReindexSource setIndex(Indices val) { this._index = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private QueryContainer _query;
  public QueryContainer getQuery() { return this._query; }
  public ReindexSource setQuery(QueryContainer val) { this._query = val; return this; }


  static final ParseField REMOTE = new ParseField("remote");
  private RemoteSource _remote;
  public RemoteSource getRemote() { return this._remote; }
  public ReindexSource setRemote(RemoteSource val) { this._remote = val; return this; }


  static final ParseField SIZE = new ParseField("size");
  private Integer _size;
  public Integer getSize() { return this._size; }
  public ReindexSource setSize(Integer val) { this._size = val; return this; }


  static final ParseField SLICE = new ParseField("slice");
  private SlicedScroll _slice;
  public SlicedScroll getSlice() { return this._slice; }
  public ReindexSource setSlice(SlicedScroll val) { this._slice = val; return this; }


  static final ParseField SORT = new ParseField("sort");
  private List<Sort> _sort;
  public List<Sort> getSort() { return this._sort; }
  public ReindexSource setSort(List<Sort> val) { this._sort = val; return this; }


  static final ParseField SOURCE = new ParseField("_source");
  private List<Field> _source;
  public List<Field> getSource() { return this._source; }
  public ReindexSource setSource(List<Field> val) { this._source = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_index != null) {
      builder.field(INDEX.getPreferredName());
      _index.toXContent(builder, params);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    if (_remote != null) {
      builder.field(REMOTE.getPreferredName());
      _remote.toXContent(builder, params);
    }
    if (_size != null) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_slice != null) {
      builder.field(SLICE.getPreferredName());
      _slice.toXContent(builder, params);
    }
    if (_sort != null) {
      builder.array(SORT.getPreferredName(), _sort);
    }
    if (_source != null) {
      builder.array(SOURCE.getPreferredName(), _source);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ReindexSource fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ReindexSource.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ReindexSource, Void> PARSER =
    new ObjectParser<>(ReindexSource.class.getName(), false, ReindexSource::new);

  static {
    PARSER.declareObject(ReindexSource::setIndex, (p, t) -> Indices.createFrom(p), INDEX);
    PARSER.declareObject(ReindexSource::setQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), QUERY);
    PARSER.declareObject(ReindexSource::setRemote, (p, t) -> RemoteSource.PARSER.apply(p, t), REMOTE);
    PARSER.declareInt(ReindexSource::setSize, SIZE);
    PARSER.declareObject(ReindexSource::setSlice, (p, t) -> SlicedScroll.PARSER.apply(p, t), SLICE);
    PARSER.declareObjectArray(ReindexSource::setSort, (p, t) -> Sort.PARSER.apply(p, t), SORT);
    PARSER.declareObjectArray(ReindexSource::setSource, (p, t) -> Field.createFrom(p), SOURCE);
  }

}
