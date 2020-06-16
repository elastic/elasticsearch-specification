
package org.elasticsearch.mapping.meta_fields.all;

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


public class AllField  implements XContentable<AllField> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public AllField setAnalyzer(String val) { this._analyzer = val; return this; }


  static final ParseField ENABLED = new ParseField("enabled");
  private Boolean _enabled;
  public Boolean getEnabled() { return this._enabled; }
  public AllField setEnabled(Boolean val) { this._enabled = val; return this; }


  static final ParseField OMIT_NORMS = new ParseField("omit_norms");
  private Boolean _omitNorms;
  public Boolean getOmitNorms() { return this._omitNorms; }
  public AllField setOmitNorms(Boolean val) { this._omitNorms = val; return this; }


  static final ParseField SEARCH_ANALYZER = new ParseField("search_analyzer");
  private String _searchAnalyzer;
  public String getSearchAnalyzer() { return this._searchAnalyzer; }
  public AllField setSearchAnalyzer(String val) { this._searchAnalyzer = val; return this; }


  static final ParseField SIMILARITY = new ParseField("similarity");
  private String _similarity;
  public String getSimilarity() { return this._similarity; }
  public AllField setSimilarity(String val) { this._similarity = val; return this; }


  static final ParseField STORE = new ParseField("store");
  private Boolean _store;
  public Boolean getStore() { return this._store; }
  public AllField setStore(Boolean val) { this._store = val; return this; }


  static final ParseField STORE_TERM_VECTOR_OFFSETS = new ParseField("store_term_vector_offsets");
  private Boolean _storeTermVectorOffsets;
  public Boolean getStoreTermVectorOffsets() { return this._storeTermVectorOffsets; }
  public AllField setStoreTermVectorOffsets(Boolean val) { this._storeTermVectorOffsets = val; return this; }


  static final ParseField STORE_TERM_VECTOR_PAYLOADS = new ParseField("store_term_vector_payloads");
  private Boolean _storeTermVectorPayloads;
  public Boolean getStoreTermVectorPayloads() { return this._storeTermVectorPayloads; }
  public AllField setStoreTermVectorPayloads(Boolean val) { this._storeTermVectorPayloads = val; return this; }


  static final ParseField STORE_TERM_VECTOR_POSITIONS = new ParseField("store_term_vector_positions");
  private Boolean _storeTermVectorPositions;
  public Boolean getStoreTermVectorPositions() { return this._storeTermVectorPositions; }
  public AllField setStoreTermVectorPositions(Boolean val) { this._storeTermVectorPositions = val; return this; }


  static final ParseField STORE_TERM_VECTORS = new ParseField("store_term_vectors");
  private Boolean _storeTermVectors;
  public Boolean getStoreTermVectors() { return this._storeTermVectors; }
  public AllField setStoreTermVectors(Boolean val) { this._storeTermVectors = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_enabled != null) {
      builder.field(ENABLED.getPreferredName(), _enabled);
    }
    if (_omitNorms != null) {
      builder.field(OMIT_NORMS.getPreferredName(), _omitNorms);
    }
    if (_searchAnalyzer != null) {
      builder.field(SEARCH_ANALYZER.getPreferredName(), _searchAnalyzer);
    }
    if (_similarity != null) {
      builder.field(SIMILARITY.getPreferredName(), _similarity);
    }
    if (_store != null) {
      builder.field(STORE.getPreferredName(), _store);
    }
    if (_storeTermVectorOffsets != null) {
      builder.field(STORE_TERM_VECTOR_OFFSETS.getPreferredName(), _storeTermVectorOffsets);
    }
    if (_storeTermVectorPayloads != null) {
      builder.field(STORE_TERM_VECTOR_PAYLOADS.getPreferredName(), _storeTermVectorPayloads);
    }
    if (_storeTermVectorPositions != null) {
      builder.field(STORE_TERM_VECTOR_POSITIONS.getPreferredName(), _storeTermVectorPositions);
    }
    if (_storeTermVectors != null) {
      builder.field(STORE_TERM_VECTORS.getPreferredName(), _storeTermVectors);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public AllField fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AllField.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AllField, Void> PARSER =
    new ObjectParser<>(AllField.class.getName(), false, AllField::new);

  static {
    PARSER.declareString(AllField::setAnalyzer, ANALYZER);
    PARSER.declareBoolean(AllField::setEnabled, ENABLED);
    PARSER.declareBoolean(AllField::setOmitNorms, OMIT_NORMS);
    PARSER.declareString(AllField::setSearchAnalyzer, SEARCH_ANALYZER);
    PARSER.declareString(AllField::setSimilarity, SIMILARITY);
    PARSER.declareBoolean(AllField::setStore, STORE);
    PARSER.declareBoolean(AllField::setStoreTermVectorOffsets, STORE_TERM_VECTOR_OFFSETS);
    PARSER.declareBoolean(AllField::setStoreTermVectorPayloads, STORE_TERM_VECTOR_PAYLOADS);
    PARSER.declareBoolean(AllField::setStoreTermVectorPositions, STORE_TERM_VECTOR_POSITIONS);
    PARSER.declareBoolean(AllField::setStoreTermVectors, STORE_TERM_VECTORS);
  }

}
