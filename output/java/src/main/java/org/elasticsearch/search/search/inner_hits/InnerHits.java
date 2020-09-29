
package org.elasticsearch.search.search.inner_hits;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.search.search.collapsing.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.search.search.highlighting.*;
import org.elasticsearch.common_options.scripting.*;
import org.elasticsearch.search.search.source_filtering.*;

public class InnerHits  implements XContentable<InnerHits> {
  
  static final ParseField COLLAPSE = new ParseField("collapse");
  private FieldCollapse _collapse;
  public FieldCollapse getCollapse() { return this._collapse; }
  public InnerHits setCollapse(FieldCollapse val) { this._collapse = val; return this; }

  static final ParseField DOCVALUE_FIELDS = new ParseField("docvalue_fields");
  private List<String> _docvalueFields;
  public List<String> getDocvalueFields() { return this._docvalueFields; }
  public InnerHits setDocvalueFields(List<String> val) { this._docvalueFields = val; return this; }

  static final ParseField EXPLAIN = new ParseField("explain");
  private Boolean _explain;
  public Boolean getExplain() { return this._explain; }
  public InnerHits setExplain(Boolean val) { this._explain = val; return this; }

  static final ParseField FROM = new ParseField("from");
  private int _from;
  private boolean _from$isSet;
  public int getFrom() { return this._from; }
  public InnerHits setFrom(int val) {
    this._from = val;
    _from$isSet = true;
    return this;
  }

  static final ParseField HIGHLIGHT = new ParseField("highlight");
  private Highlight _highlight;
  public Highlight getHighlight() { return this._highlight; }
  public InnerHits setHighlight(Highlight val) { this._highlight = val; return this; }

  static final ParseField IGNORE_UNMAPPED = new ParseField("ignore_unmapped");
  private Boolean _ignoreUnmapped;
  public Boolean getIgnoreUnmapped() { return this._ignoreUnmapped; }
  public InnerHits setIgnoreUnmapped(Boolean val) { this._ignoreUnmapped = val; return this; }

  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public InnerHits setName(String val) { this._name = val; return this; }

  static final ParseField SCRIPT_FIELDS = new ParseField("script_fields");
  private NamedContainer<String, ScriptField> _scriptFields;
  public NamedContainer<String, ScriptField> getScriptFields() { return this._scriptFields; }
  public InnerHits setScriptFields(NamedContainer<String, ScriptField> val) { this._scriptFields = val; return this; }

  static final ParseField SEQ_NO_PRIMARY_TERM = new ParseField("seq_no_primary_term");
  private Boolean _seqNoPrimaryTerm;
  public Boolean getSeqNoPrimaryTerm() { return this._seqNoPrimaryTerm; }
  public InnerHits setSeqNoPrimaryTerm(Boolean val) { this._seqNoPrimaryTerm = val; return this; }

  static final ParseField SIZE = new ParseField("size");
  private int _size;
  private boolean _size$isSet;
  public int getSize() { return this._size; }
  public InnerHits setSize(int val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }

  static final ParseField SORT = new ParseField("sort");
  private List<SingleKeyDictionary<Union2<Sort, SortOrder>>> _sort;
  public List<SingleKeyDictionary<Union2<Sort, SortOrder>>> getSort() { return this._sort; }
  public InnerHits setSort(List<SingleKeyDictionary<Union2<Sort, SortOrder>>> val) { this._sort = val; return this; }

  static final ParseField SOURCE = new ParseField("_source");
  private Union2<Boolean, SourceFilter> _source;
  public Union2<Boolean, SourceFilter> getSource() { return this._source; }
  public InnerHits setSource(Union2<Boolean, SourceFilter> val) { this._source = val; return this; }

  static final ParseField VERSION = new ParseField("version");
  private Boolean _version;
  public Boolean getVersion() { return this._version; }
  public InnerHits setVersion(Boolean val) { this._version = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_collapse != null) {
      builder.field(COLLAPSE.getPreferredName());
      _collapse.toXContent(builder, params);
    }
    if (_docvalueFields != null) {
      builder.array(DOCVALUE_FIELDS.getPreferredName(), _docvalueFields);
    }
    if (_explain != null) {
      builder.field(EXPLAIN.getPreferredName(), _explain);
    }
    if (_from$isSet) {
      builder.field(FROM.getPreferredName(), _from);
    }
    if (_highlight != null) {
      builder.field(HIGHLIGHT.getPreferredName());
      _highlight.toXContent(builder, params);
    }
    if (_ignoreUnmapped != null) {
      builder.field(IGNORE_UNMAPPED.getPreferredName(), _ignoreUnmapped);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_scriptFields != null) {
      builder.field(SCRIPT_FIELDS.getPreferredName());
      _scriptFields.toXContent(builder, params);
    }
    if (_seqNoPrimaryTerm != null) {
      builder.field(SEQ_NO_PRIMARY_TERM.getPreferredName(), _seqNoPrimaryTerm);
    }
    if (_size$isSet) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_sort != null) {
      builder.array(SORT.getPreferredName(), _sort);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName());
      _source.toXContent(builder, params);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
  }

  @Override
  public InnerHits fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return InnerHits.PARSER.apply(parser, null);
  }

  public static final ObjectParser<InnerHits, Void> PARSER =
    new ObjectParser<>(InnerHits.class.getName(), false, InnerHits::new);

  static {
    PARSER.declareObject(InnerHits::setCollapse, (p, t) -> FieldCollapse.PARSER.apply(p, t), COLLAPSE);
    PARSER.declareStringArray(InnerHits::setDocvalueFields, DOCVALUE_FIELDS);
    PARSER.declareBoolean(InnerHits::setExplain, EXPLAIN);
    PARSER.declareInt(InnerHits::setFrom, FROM);
    PARSER.declareObject(InnerHits::setHighlight, (p, t) -> Highlight.PARSER.apply(p, t), HIGHLIGHT);
    PARSER.declareBoolean(InnerHits::setIgnoreUnmapped, IGNORE_UNMAPPED);
    PARSER.declareString(InnerHits::setName, NAME);
    PARSER.declareObject(InnerHits::setScriptFields, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> ScriptField.PARSER.apply(pp, null)), SCRIPT_FIELDS);
    PARSER.declareBoolean(InnerHits::setSeqNoPrimaryTerm, SEQ_NO_PRIMARY_TERM);
    PARSER.declareInt(InnerHits::setSize, SIZE);
    PARSER.declareObjectArray(InnerHits::setSort, null /* TODO SingleKeyDictionary [object Object] */, SORT);
    PARSER.declareObject(InnerHits::setSource, (p, t) ->  new Union2<Boolean, SourceFilter>(), SOURCE);
    PARSER.declareBoolean(InnerHits::setVersion, VERSION);
  }

}
