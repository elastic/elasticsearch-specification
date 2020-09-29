
package org.elasticsearch.search.search.highlighting;

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
import org.elasticsearch.search.search.highlighting.*;
import org.elasticsearch.query_dsl.abstractions.container.*;

public class HighlightField  implements XContentable<HighlightField> {
  
  static final ParseField BOUNDARY_CHARS = new ParseField("boundary_chars");
  private String _boundaryChars;
  public String getBoundaryChars() { return this._boundaryChars; }
  public HighlightField setBoundaryChars(String val) { this._boundaryChars = val; return this; }

  static final ParseField BOUNDARY_MAX_SCAN = new ParseField("boundary_max_scan");
  private int _boundaryMaxScan;
  private boolean _boundaryMaxScan$isSet;
  public int getBoundaryMaxScan() { return this._boundaryMaxScan; }
  public HighlightField setBoundaryMaxScan(int val) {
    this._boundaryMaxScan = val;
    _boundaryMaxScan$isSet = true;
    return this;
  }

  static final ParseField BOUNDARY_SCANNER = new ParseField("boundary_scanner");
  private BoundaryScanner _boundaryScanner;
  public BoundaryScanner getBoundaryScanner() { return this._boundaryScanner; }
  public HighlightField setBoundaryScanner(BoundaryScanner val) { this._boundaryScanner = val; return this; }

  static final ParseField BOUNDARY_SCANNER_LOCALE = new ParseField("boundary_scanner_locale");
  private String _boundaryScannerLocale;
  public String getBoundaryScannerLocale() { return this._boundaryScannerLocale; }
  public HighlightField setBoundaryScannerLocale(String val) { this._boundaryScannerLocale = val; return this; }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public HighlightField setField(String val) { this._field = val; return this; }

  static final ParseField FORCE_SOURCE = new ParseField("force_source");
  private Boolean _forceSource;
  public Boolean getForceSource() { return this._forceSource; }
  public HighlightField setForceSource(Boolean val) { this._forceSource = val; return this; }

  static final ParseField FRAGMENTER = new ParseField("fragmenter");
  private HighlighterFragmenter _fragmenter;
  public HighlighterFragmenter getFragmenter() { return this._fragmenter; }
  public HighlightField setFragmenter(HighlighterFragmenter val) { this._fragmenter = val; return this; }

  static final ParseField FRAGMENT_OFFSET = new ParseField("fragment_offset");
  private int _fragmentOffset;
  private boolean _fragmentOffset$isSet;
  public int getFragmentOffset() { return this._fragmentOffset; }
  public HighlightField setFragmentOffset(int val) {
    this._fragmentOffset = val;
    _fragmentOffset$isSet = true;
    return this;
  }

  static final ParseField FRAGMENT_SIZE = new ParseField("fragment_size");
  private int _fragmentSize;
  private boolean _fragmentSize$isSet;
  public int getFragmentSize() { return this._fragmentSize; }
  public HighlightField setFragmentSize(int val) {
    this._fragmentSize = val;
    _fragmentSize$isSet = true;
    return this;
  }

  static final ParseField HIGHLIGHT_QUERY = new ParseField("highlight_query");
  private QueryContainer _highlightQuery;
  public QueryContainer getHighlightQuery() { return this._highlightQuery; }
  public HighlightField setHighlightQuery(QueryContainer val) { this._highlightQuery = val; return this; }

  static final ParseField MATCHED_FIELDS = new ParseField("matched_fields");
  private List<String> _matchedFields;
  public List<String> getMatchedFields() { return this._matchedFields; }
  public HighlightField setMatchedFields(List<String> val) { this._matchedFields = val; return this; }

  static final ParseField MAX_FRAGMENT_LENGTH = new ParseField("max_fragment_length");
  private int _maxFragmentLength;
  private boolean _maxFragmentLength$isSet;
  public int getMaxFragmentLength() { return this._maxFragmentLength; }
  public HighlightField setMaxFragmentLength(int val) {
    this._maxFragmentLength = val;
    _maxFragmentLength$isSet = true;
    return this;
  }

  static final ParseField NO_MATCH_SIZE = new ParseField("no_match_size");
  private int _noMatchSize;
  private boolean _noMatchSize$isSet;
  public int getNoMatchSize() { return this._noMatchSize; }
  public HighlightField setNoMatchSize(int val) {
    this._noMatchSize = val;
    _noMatchSize$isSet = true;
    return this;
  }

  static final ParseField NUMBER_OF_FRAGMENTS = new ParseField("number_of_fragments");
  private int _numberOfFragments;
  private boolean _numberOfFragments$isSet;
  public int getNumberOfFragments() { return this._numberOfFragments; }
  public HighlightField setNumberOfFragments(int val) {
    this._numberOfFragments = val;
    _numberOfFragments$isSet = true;
    return this;
  }

  static final ParseField ORDER = new ParseField("order");
  private HighlighterOrder _order;
  public HighlighterOrder getOrder() { return this._order; }
  public HighlightField setOrder(HighlighterOrder val) { this._order = val; return this; }

  static final ParseField PHRASE_LIMIT = new ParseField("phrase_limit");
  private int _phraseLimit;
  private boolean _phraseLimit$isSet;
  public int getPhraseLimit() { return this._phraseLimit; }
  public HighlightField setPhraseLimit(int val) {
    this._phraseLimit = val;
    _phraseLimit$isSet = true;
    return this;
  }

  static final ParseField POST_TAGS = new ParseField("post_tags");
  private List<String> _postTags;
  public List<String> getPostTags() { return this._postTags; }
  public HighlightField setPostTags(List<String> val) { this._postTags = val; return this; }

  static final ParseField PRE_TAGS = new ParseField("pre_tags");
  private List<String> _preTags;
  public List<String> getPreTags() { return this._preTags; }
  public HighlightField setPreTags(List<String> val) { this._preTags = val; return this; }

  static final ParseField REQUIRE_FIELD_MATCH = new ParseField("require_field_match");
  private Boolean _requireFieldMatch;
  public Boolean getRequireFieldMatch() { return this._requireFieldMatch; }
  public HighlightField setRequireFieldMatch(Boolean val) { this._requireFieldMatch = val; return this; }

  static final ParseField TAGS_SCHEMA = new ParseField("tags_schema");
  private HighlighterTagsSchema _tagsSchema;
  public HighlighterTagsSchema getTagsSchema() { return this._tagsSchema; }
  public HighlightField setTagsSchema(HighlighterTagsSchema val) { this._tagsSchema = val; return this; }

  static final ParseField TYPE = new ParseField("type");
  private Union2<HighlighterType, String> _type;
  public Union2<HighlighterType, String> getType() { return this._type; }
  public HighlightField setType(Union2<HighlighterType, String> val) { this._type = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_boundaryChars != null) {
      builder.field(BOUNDARY_CHARS.getPreferredName(), _boundaryChars);
    }
    if (_boundaryMaxScan$isSet) {
      builder.field(BOUNDARY_MAX_SCAN.getPreferredName(), _boundaryMaxScan);
    }
    if (_boundaryScanner != null) {
      builder.field(BOUNDARY_SCANNER.getPreferredName());
      _boundaryScanner.toXContent(builder, params);
    }
    if (_boundaryScannerLocale != null) {
      builder.field(BOUNDARY_SCANNER_LOCALE.getPreferredName(), _boundaryScannerLocale);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_forceSource != null) {
      builder.field(FORCE_SOURCE.getPreferredName(), _forceSource);
    }
    if (_fragmenter != null) {
      builder.field(FRAGMENTER.getPreferredName());
      _fragmenter.toXContent(builder, params);
    }
    if (_fragmentOffset$isSet) {
      builder.field(FRAGMENT_OFFSET.getPreferredName(), _fragmentOffset);
    }
    if (_fragmentSize$isSet) {
      builder.field(FRAGMENT_SIZE.getPreferredName(), _fragmentSize);
    }
    if (_highlightQuery != null) {
      builder.field(HIGHLIGHT_QUERY.getPreferredName());
      _highlightQuery.toXContent(builder, params);
    }
    if (_matchedFields != null) {
      builder.array(MATCHED_FIELDS.getPreferredName(), _matchedFields);
    }
    if (_maxFragmentLength$isSet) {
      builder.field(MAX_FRAGMENT_LENGTH.getPreferredName(), _maxFragmentLength);
    }
    if (_noMatchSize$isSet) {
      builder.field(NO_MATCH_SIZE.getPreferredName(), _noMatchSize);
    }
    if (_numberOfFragments$isSet) {
      builder.field(NUMBER_OF_FRAGMENTS.getPreferredName(), _numberOfFragments);
    }
    if (_order != null) {
      builder.field(ORDER.getPreferredName());
      _order.toXContent(builder, params);
    }
    if (_phraseLimit$isSet) {
      builder.field(PHRASE_LIMIT.getPreferredName(), _phraseLimit);
    }
    if (_postTags != null) {
      builder.array(POST_TAGS.getPreferredName(), _postTags);
    }
    if (_preTags != null) {
      builder.array(PRE_TAGS.getPreferredName(), _preTags);
    }
    if (_requireFieldMatch != null) {
      builder.field(REQUIRE_FIELD_MATCH.getPreferredName(), _requireFieldMatch);
    }
    if (_tagsSchema != null) {
      builder.field(TAGS_SCHEMA.getPreferredName());
      _tagsSchema.toXContent(builder, params);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName());
      _type.toXContent(builder, params);
    }
  }

  @Override
  public HighlightField fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HighlightField.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HighlightField, Void> PARSER =
    new ObjectParser<>(HighlightField.class.getName(), false, HighlightField::new);

  static {
    PARSER.declareString(HighlightField::setBoundaryChars, BOUNDARY_CHARS);
    PARSER.declareInt(HighlightField::setBoundaryMaxScan, BOUNDARY_MAX_SCAN);
    PARSER.declareField(HighlightField::setBoundaryScanner, (p, t) -> BoundaryScanner.PARSER.apply(p), BOUNDARY_SCANNER, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(HighlightField::setBoundaryScannerLocale, BOUNDARY_SCANNER_LOCALE);
    PARSER.declareString(HighlightField::setField, FIELD);
    PARSER.declareBoolean(HighlightField::setForceSource, FORCE_SOURCE);
    PARSER.declareField(HighlightField::setFragmenter, (p, t) -> HighlighterFragmenter.PARSER.apply(p), FRAGMENTER, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareInt(HighlightField::setFragmentOffset, FRAGMENT_OFFSET);
    PARSER.declareInt(HighlightField::setFragmentSize, FRAGMENT_SIZE);
    PARSER.declareObject(HighlightField::setHighlightQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), HIGHLIGHT_QUERY);
    PARSER.declareStringArray(HighlightField::setMatchedFields, MATCHED_FIELDS);
    PARSER.declareInt(HighlightField::setMaxFragmentLength, MAX_FRAGMENT_LENGTH);
    PARSER.declareInt(HighlightField::setNoMatchSize, NO_MATCH_SIZE);
    PARSER.declareInt(HighlightField::setNumberOfFragments, NUMBER_OF_FRAGMENTS);
    PARSER.declareField(HighlightField::setOrder, (p, t) -> HighlighterOrder.PARSER.apply(p), ORDER, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareInt(HighlightField::setPhraseLimit, PHRASE_LIMIT);
    PARSER.declareStringArray(HighlightField::setPostTags, POST_TAGS);
    PARSER.declareStringArray(HighlightField::setPreTags, PRE_TAGS);
    PARSER.declareBoolean(HighlightField::setRequireFieldMatch, REQUIRE_FIELD_MATCH);
    PARSER.declareField(HighlightField::setTagsSchema, (p, t) -> HighlighterTagsSchema.PARSER.apply(p), TAGS_SCHEMA, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(HighlightField::setType, (p, t) ->  new Union2<HighlighterType, String>(), TYPE);
  }

}
