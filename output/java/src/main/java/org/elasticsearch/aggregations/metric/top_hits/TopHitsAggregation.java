
package org.elasticsearch.aggregations.metric.top_hits;

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
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.search.search.highlighting.*;
import org.elasticsearch.common_options.scripting.*;
import org.elasticsearch.search.search.sort.*;
import org.elasticsearch.search.search.source_filtering.*;

public class TopHitsAggregation  implements XContentable<TopHitsAggregation> {
  
  static final ParseField DOCVALUE_FIELDS = new ParseField("docvalue_fields");
  private List<Field> _docvalueFields;
  public List<Field> getDocvalueFields() { return this._docvalueFields; }
  public TopHitsAggregation setDocvalueFields(List<Field> val) { this._docvalueFields = val; return this; }


  static final ParseField EXPLAIN = new ParseField("explain");
  private Boolean _explain;
  public Boolean getExplain() { return this._explain; }
  public TopHitsAggregation setExplain(Boolean val) { this._explain = val; return this; }


  static final ParseField FROM = new ParseField("from");
  private Integer _from;
  public Integer getFrom() { return this._from; }
  public TopHitsAggregation setFrom(Integer val) { this._from = val; return this; }


  static final ParseField HIGHLIGHT = new ParseField("highlight");
  private Highlight _highlight;
  public Highlight getHighlight() { return this._highlight; }
  public TopHitsAggregation setHighlight(Highlight val) { this._highlight = val; return this; }


  static final ParseField SCRIPT_FIELDS = new ParseField("script_fields");
  private NamedContainer<String, ScriptField> _scriptFields;
  public NamedContainer<String, ScriptField> getScriptFields() { return this._scriptFields; }
  public TopHitsAggregation setScriptFields(NamedContainer<String, ScriptField> val) { this._scriptFields = val; return this; }


  static final ParseField SIZE = new ParseField("size");
  private Integer _size;
  public Integer getSize() { return this._size; }
  public TopHitsAggregation setSize(Integer val) { this._size = val; return this; }


  static final ParseField SORT = new ParseField("sort");
  private List<Sort> _sort;
  public List<Sort> getSort() { return this._sort; }
  public TopHitsAggregation setSort(List<Sort> val) { this._sort = val; return this; }


  static final ParseField SOURCE = new ParseField("_source");
  private Either<Boolean, SourceFilter> _source;
  public Either<Boolean, SourceFilter> getSource() { return this._source; }
  public TopHitsAggregation setSource(Either<Boolean, SourceFilter> val) { this._source = val; return this; }


  static final ParseField STORED_FIELDS = new ParseField("stored_fields");
  private List<Field> _storedFields;
  public List<Field> getStoredFields() { return this._storedFields; }
  public TopHitsAggregation setStoredFields(List<Field> val) { this._storedFields = val; return this; }


  static final ParseField TRACK_SCORES = new ParseField("track_scores");
  private Boolean _trackScores;
  public Boolean getTrackScores() { return this._trackScores; }
  public TopHitsAggregation setTrackScores(Boolean val) { this._trackScores = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private Boolean _version;
  public Boolean getVersion() { return this._version; }
  public TopHitsAggregation setVersion(Boolean val) { this._version = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_docvalueFields != null) {
      builder.array(DOCVALUE_FIELDS.getPreferredName(), _docvalueFields);
    }
    if (_explain != null) {
      builder.field(EXPLAIN.getPreferredName(), _explain);
    }
    if (_from != null) {
      builder.field(FROM.getPreferredName(), _from);
    }
    if (_highlight != null) {
      builder.field(HIGHLIGHT.getPreferredName());
      _highlight.toXContent(builder, params);
    }
    if (_scriptFields != null) {
      builder.field(SCRIPT_FIELDS.getPreferredName());
      _scriptFields.toXContent(builder, params);
    }
    if (_size != null) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_sort != null) {
      builder.array(SORT.getPreferredName(), _sort);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName());
      _source.map(builder::value, r-> r.toXContent(builder, params));
    }
    if (_storedFields != null) {
      builder.array(STORED_FIELDS.getPreferredName(), _storedFields);
    }
    if (_trackScores != null) {
      builder.field(TRACK_SCORES.getPreferredName(), _trackScores);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TopHitsAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TopHitsAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TopHitsAggregation, Void> PARSER =
    new ObjectParser<>(TopHitsAggregation.class.getName(), false, TopHitsAggregation::new);

  static {
    PARSER.declareObjectArray(TopHitsAggregation::setDocvalueFields, (p, t) -> Field.createFrom(p), DOCVALUE_FIELDS);
    PARSER.declareBoolean(TopHitsAggregation::setExplain, EXPLAIN);
    PARSER.declareInt(TopHitsAggregation::setFrom, FROM);
    PARSER.declareObject(TopHitsAggregation::setHighlight, (p, t) -> Highlight.PARSER.apply(p, t), HIGHLIGHT);
    PARSER.declareObject(TopHitsAggregation::setScriptFields, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> ScriptField.PARSER.apply(pp, null)), SCRIPT_FIELDS);
    PARSER.declareInt(TopHitsAggregation::setSize, SIZE);
    PARSER.declareObjectArray(TopHitsAggregation::setSort, (p, t) -> Sort.PARSER.apply(p, t), SORT);
    PARSER.declareObject(TopHitsAggregation::setSource, (p, t) ->  new Either<Boolean, SourceFilter>() /* TODO UnionOf */, SOURCE);
    PARSER.declareObjectArray(TopHitsAggregation::setStoredFields, (p, t) -> Field.createFrom(p), STORED_FIELDS);
    PARSER.declareBoolean(TopHitsAggregation::setTrackScores, TRACK_SCORES);
    PARSER.declareBoolean(TopHitsAggregation::setVersion, VERSION);
  }

}
