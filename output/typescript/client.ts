/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import T from './types'

/**
  * We are still working on this type, it will arrive soon.
  * If it's critical for you, please open an issue.
  * https://github.com/elastic/elasticsearch-js
  */
type TODO = Record<string, any>

declare class ESAPI {
  asyncSearch: {
    delete<TContext = unknown>(params?: T.AsyncSearchDeleteRequest, options?: any): Promise<T.AsyncSearchDeleteResponse>
    get<TDocument, TContext = unknown>(params?: T.AsyncSearchGetRequest, options?: any): Promise<T.AsyncSearchGetResponse<TDocument>>
    submit<TDocument, TContext = unknown>(params?: T.AsyncSearchSubmitRequest, options?: any): Promise<T.AsyncSearchSubmitResponse<TDocument>>
  }
  autoscaling: {
    deleteAutoscalingPolicy<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    getAutoscalingDecision<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    getAutoscalingPolicy<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    putAutoscalingPolicy<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
  }
  bulk<TSource, TContext = unknown>(params?: T.BulkRequest<TSource>, options?: any): Promise<T.BulkResponse>
  cat: {
    aliases<TContext = unknown>(params?: T.CatAliasesRequest, options?: any): Promise<T.CatAliasesResponse>
    allocation<TContext = unknown>(params?: T.CatAllocationRequest, options?: any): Promise<T.CatAllocationResponse>
    count<TContext = unknown>(params?: T.CatCountRequest, options?: any): Promise<T.CatCountResponse>
    fielddata<TContext = unknown>(params?: T.CatFielddataRequest, options?: any): Promise<T.CatFielddataResponse>
    health<TContext = unknown>(params?: T.CatHealthRequest, options?: any): Promise<T.CatHealthResponse>
    help<TContext = unknown>(params?: T.CatHelpRequest, options?: any): Promise<T.CatHelpResponse>
    indices<TContext = unknown>(params?: T.CatIndicesRequest, options?: any): Promise<T.CatIndicesResponse>
    master<TContext = unknown>(params?: T.CatMasterRequest, options?: any): Promise<T.CatMasterResponse>
    mlDataFrameAnalytics<TContext = unknown>(params?: T.CatDataFrameAnalyticsRequest, options?: any): Promise<T.CatDataFrameAnalyticsResponse>
    mlDatafeeds<TContext = unknown>(params?: T.CatDatafeedsRequest, options?: any): Promise<T.CatDatafeedsResponse>
    mlJobs<TContext = unknown>(params?: T.CatJobsRequest, options?: any): Promise<T.CatJobsResponse>
    mlTrainedModels<TContext = unknown>(params?: T.CatTrainedModelsRequest, options?: any): Promise<T.CatTrainedModelsResponse>
    nodeattrs<TContext = unknown>(params?: T.CatNodeAttributesRequest, options?: any): Promise<T.CatNodeAttributesResponse>
    nodes<TContext = unknown>(params?: T.CatNodesRequest, options?: any): Promise<T.CatNodesResponse>
    pendingTasks<TContext = unknown>(params?: T.CatPendingTasksRequest, options?: any): Promise<T.CatPendingTasksResponse>
    plugins<TContext = unknown>(params?: T.CatPluginsRequest, options?: any): Promise<T.CatPluginsResponse>
    recovery<TContext = unknown>(params?: T.CatRecoveryRequest, options?: any): Promise<T.CatRecoveryResponse>
    repositories<TContext = unknown>(params?: T.CatRepositoriesRequest, options?: any): Promise<T.CatRepositoriesResponse>
    segments<TContext = unknown>(params?: T.CatSegmentsRequest, options?: any): Promise<T.CatSegmentsResponse>
    shards<TContext = unknown>(params?: T.CatShardsRequest, options?: any): Promise<T.CatShardsResponse>
    snapshots<TContext = unknown>(params?: T.CatSnapshotsRequest, options?: any): Promise<T.CatSnapshotsResponse>
    tasks<TContext = unknown>(params?: T.CatTasksRequest, options?: any): Promise<T.CatTasksResponse>
    templates<TContext = unknown>(params?: T.CatTemplatesRequest, options?: any): Promise<T.CatTemplatesResponse>
    threadPool<TContext = unknown>(params?: T.CatThreadPoolRequest, options?: any): Promise<T.CatThreadPoolResponse>
    transforms<TContext = unknown>(params?: T.CatTransformsRequest, options?: any): Promise<T.CatTransformsResponse>
  }
  ccr: {
    deleteAutoFollowPattern<TContext = unknown>(params?: T.DeleteAutoFollowPatternRequest, options?: any): Promise<T.DeleteAutoFollowPatternResponse>
    follow<TContext = unknown>(params?: T.CreateFollowIndexRequest, options?: any): Promise<T.CreateFollowIndexResponse>
    followInfo<TContext = unknown>(params?: T.FollowInfoRequest, options?: any): Promise<T.FollowInfoResponse>
    followStats<TContext = unknown>(params?: T.FollowIndexStatsRequest, options?: any): Promise<T.FollowIndexStatsResponse>
    forgetFollower<TContext = unknown>(params?: T.ForgetFollowerIndexRequest, options?: any): Promise<T.ForgetFollowerIndexResponse>
    getAutoFollowPattern<TContext = unknown>(params?: T.GetAutoFollowPatternRequest, options?: any): Promise<T.GetAutoFollowPatternResponse>
    pauseAutoFollowPattern<TContext = unknown>(params?: T.PauseAutoFollowPatternRequest, options?: any): Promise<T.PauseAutoFollowPatternResponse>
    pauseFollow<TContext = unknown>(params?: T.PauseFollowIndexRequest, options?: any): Promise<T.PauseFollowIndexResponse>
    putAutoFollowPattern<TContext = unknown>(params?: T.CreateAutoFollowPatternRequest, options?: any): Promise<T.CreateAutoFollowPatternResponse>
    resumeAutoFollowPattern<TContext = unknown>(params?: T.ResumeAutoFollowPatternRequest, options?: any): Promise<T.ResumeAutoFollowPatternResponse>
    resumeFollow<TContext = unknown>(params?: T.ResumeFollowIndexRequest, options?: any): Promise<T.ResumeFollowIndexResponse>
    stats<TContext = unknown>(params?: T.CcrStatsRequest, options?: any): Promise<T.CcrStatsResponse>
    unfollow<TContext = unknown>(params?: T.UnfollowIndexRequest, options?: any): Promise<T.UnfollowIndexResponse>
  }
  clearScroll<TContext = unknown>(params?: T.ClearScrollRequest, options?: any): Promise<T.ClearScrollResponse>
  closePointInTime<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
  cluster: {
    allocationExplain<TContext = unknown>(params?: T.ClusterAllocationExplainRequest, options?: any): Promise<T.ClusterAllocationExplainResponse>
    deleteComponentTemplate<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    deleteVotingConfigExclusions<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    existsComponentTemplate<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    getComponentTemplate<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    getSettings<TContext = unknown>(params?: T.ClusterGetSettingsRequest, options?: any): Promise<T.ClusterGetSettingsResponse>
    health<TContext = unknown>(params?: T.ClusterHealthRequest, options?: any): Promise<T.ClusterHealthResponse>
    pendingTasks<TContext = unknown>(params?: T.ClusterPendingTasksRequest, options?: any): Promise<T.ClusterPendingTasksResponse>
    postVotingConfigExclusions<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    putComponentTemplate<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    putSettings<TContext = unknown>(params?: T.ClusterPutSettingsRequest, options?: any): Promise<T.ClusterPutSettingsResponse>
    remoteInfo<TContext = unknown>(params?: T.RemoteInfoRequest, options?: any): Promise<T.RemoteInfoResponse>
    reroute<TContext = unknown>(params?: T.ClusterRerouteRequest, options?: any): Promise<T.ClusterRerouteResponse>
    state<TContext = unknown>(params?: T.ClusterStateRequest, options?: any): Promise<T.ClusterStateResponse>
    stats<TContext = unknown>(params?: T.ClusterStatsRequest, options?: any): Promise<T.ClusterStatsResponse>
  }
  count<TContext = unknown>(params?: T.CountRequest, options?: any): Promise<T.CountResponse>
  create<TDocument, TContext = unknown>(params?: T.CreateRequest<TDocument>, options?: any): Promise<T.CreateResponse>
  danglingIndices: {
    deleteDanglingIndex<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    importDanglingIndex<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    listDanglingIndices<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
  }
  delete<TContext = unknown>(params?: T.DeleteRequest, options?: any): Promise<T.DeleteResponse>
  deleteByQuery<TContext = unknown>(params?: T.DeleteByQueryRequest, options?: any): Promise<T.DeleteByQueryResponse>
  deleteByQueryRethrottle<TContext = unknown>(params?: T.DeleteByQueryRethrottleRequest, options?: any): Promise<T.DeleteByQueryRethrottleResponse>
  deleteScript<TContext = unknown>(params?: T.DeleteScriptRequest, options?: any): Promise<T.DeleteScriptResponse>
  enrich: {
    deletePolicy<TContext = unknown>(params?: T.DeleteEnrichPolicyRequest, options?: any): Promise<T.DeleteEnrichPolicyResponse>
    executePolicy<TContext = unknown>(params?: T.ExecuteEnrichPolicyRequest, options?: any): Promise<T.ExecuteEnrichPolicyResponse>
    getPolicy<TContext = unknown>(params?: T.GetEnrichPolicyRequest, options?: any): Promise<T.GetEnrichPolicyResponse>
    putPolicy<TContext = unknown>(params?: T.PutEnrichPolicyRequest, options?: any): Promise<T.PutEnrichPolicyResponse>
    stats<TContext = unknown>(params?: T.EnrichStatsRequest, options?: any): Promise<T.EnrichStatsResponse>
  }
  eql: {
    delete<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    get<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    search<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
  }
  exists<TContext = unknown>(params?: T.DocumentExistsRequest, options?: any): Promise<T.ExistsResponse>
  existsSource<TContext = unknown>(params?: T.SourceExistsRequest, options?: any): Promise<T.ExistsResponse>
  explain<TDocument, TContext = unknown>(params?: T.ExplainRequest, options?: any): Promise<T.ExplainResponse<TDocument>>
  fieldCaps<TContext = unknown>(params?: T.FieldCapabilitiesRequest, options?: any): Promise<T.FieldCapabilitiesResponse>
  get<TDocument, TContext = unknown>(params?: T.GetRequest, options?: any): Promise<T.GetResponse<TDocument>>
  getScript<TContext = unknown>(params?: T.GetScriptRequest, options?: any): Promise<T.GetScriptResponse>
  getScriptContext<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
  getScriptLanguages<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
  getSource<TDocument, TContext = unknown>(params?: T.SourceRequest, options?: any): Promise<T.SourceResponse<TDocument>>
  graph: {
    explore<TContext = unknown>(params?: T.GraphExploreRequest, options?: any): Promise<T.GraphExploreResponse>
  }
  ilm: {
    deleteLifecycle<TContext = unknown>(params?: T.DeleteLifecycleRequest, options?: any): Promise<T.DeleteLifecycleResponse>
    explainLifecycle<TContext = unknown>(params?: T.ExplainLifecycleRequest, options?: any): Promise<T.ExplainLifecycleResponse>
    getLifecycle<TContext = unknown>(params?: T.GetLifecycleRequest, options?: any): Promise<T.GetLifecycleResponse>
    getStatus<TContext = unknown>(params?: T.GetIlmStatusRequest, options?: any): Promise<T.GetIlmStatusResponse>
    moveToStep<TContext = unknown>(params?: T.MoveToStepRequest, options?: any): Promise<T.MoveToStepResponse>
    putLifecycle<TContext = unknown>(params?: T.PutLifecycleRequest, options?: any): Promise<T.PutLifecycleResponse>
    removePolicy<TContext = unknown>(params?: T.RemovePolicyRequest, options?: any): Promise<T.RemovePolicyResponse>
    retry<TContext = unknown>(params?: T.RetryIlmRequest, options?: any): Promise<T.RetryIlmResponse>
    start<TContext = unknown>(params?: T.StartIlmRequest, options?: any): Promise<T.StartIlmResponse>
    stop<TContext = unknown>(params?: T.StopIlmRequest, options?: any): Promise<T.StopIlmResponse>
  }
  index<TDocument, TContext = unknown>(params?: T.IndexRequest<TDocument>, options?: any): Promise<T.IndexResponse>
  indices: {
    addBlock<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    analyze<TContext = unknown>(params?: T.AnalyzeRequest, options?: any): Promise<T.AnalyzeResponse>
    clearCache<TContext = unknown>(params?: T.ClearCacheRequest, options?: any): Promise<T.ClearCacheResponse>
    clone<TContext = unknown>(params?: T.CloneIndexRequest, options?: any): Promise<T.CloneIndexResponse>
    close<TContext = unknown>(params?: T.CloseIndexRequest, options?: any): Promise<T.CloseIndexResponse>
    create<TContext = unknown>(params?: T.CreateIndexRequest, options?: any): Promise<T.CreateIndexResponse>
    createDataStream<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    dataStreamsStats<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    delete<TContext = unknown>(params?: T.DeleteIndexRequest, options?: any): Promise<T.DeleteIndexResponse>
    deleteAlias<TContext = unknown>(params?: T.DeleteAliasRequest, options?: any): Promise<T.DeleteAliasResponse>
    deleteDataStream<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    deleteIndexTemplate<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    deleteTemplate<TContext = unknown>(params?: T.DeleteIndexTemplateRequest, options?: any): Promise<T.DeleteIndexTemplateResponse>
    exists<TContext = unknown>(params?: T.IndexExistsRequest, options?: any): Promise<T.ExistsResponse>
    existsAlias<TContext = unknown>(params?: T.AliasExistsRequest, options?: any): Promise<T.ExistsResponse>
    existsIndexTemplate<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    existsTemplate<TContext = unknown>(params?: T.IndexTemplateExistsRequest, options?: any): Promise<T.ExistsResponse>
    existsType<TContext = unknown>(params?: T.TypeExistsRequest, options?: any): Promise<T.ExistsResponse>
    flush<TContext = unknown>(params?: T.FlushRequest, options?: any): Promise<T.FlushResponse>
    flushSynced<TContext = unknown>(params?: T.SyncedFlushRequest, options?: any): Promise<T.SyncedFlushResponse>
    forcemerge<TContext = unknown>(params?: T.ForceMergeRequest, options?: any): Promise<T.ForceMergeResponse>
    freeze<TContext = unknown>(params?: T.FreezeIndexRequest, options?: any): Promise<T.FreezeIndexResponse>
    get<TContext = unknown>(params?: T.GetIndexRequest, options?: any): Promise<T.GetIndexResponse>
    getAlias<TContext = unknown>(params?: T.GetAliasRequest, options?: any): Promise<T.GetAliasResponse>
    getDataStream<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    getFieldMapping<TContext = unknown>(params?: T.GetFieldMappingRequest, options?: any): Promise<T.GetFieldMappingResponse>
    getIndexTemplate<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    getMapping<TContext = unknown>(params?: T.GetMappingRequest, options?: any): Promise<T.GetMappingResponse>
    getSettings<TContext = unknown>(params?: T.GetIndexSettingsRequest, options?: any): Promise<T.GetIndexSettingsResponse>
    getTemplate<TContext = unknown>(params?: T.GetIndexTemplateRequest, options?: any): Promise<T.GetIndexTemplateResponse>
    getUpgrade<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    open<TContext = unknown>(params?: T.OpenIndexRequest, options?: any): Promise<T.OpenIndexResponse>
    putAlias<TContext = unknown>(params?: T.PutAliasRequest, options?: any): Promise<T.PutAliasResponse>
    putIndexTemplate<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    putMapping<TContext = unknown>(params?: T.PutMappingRequest, options?: any): Promise<T.PutMappingResponse>
    putSettings<TContext = unknown>(params?: T.UpdateIndexSettingsRequest, options?: any): Promise<T.UpdateIndexSettingsResponse>
    putTemplate<TContext = unknown>(params?: T.PutIndexTemplateRequest, options?: any): Promise<T.PutIndexTemplateResponse>
    recovery<TContext = unknown>(params?: T.RecoveryStatusRequest, options?: any): Promise<T.RecoveryStatusResponse>
    refresh<TContext = unknown>(params?: T.RefreshRequest, options?: any): Promise<T.RefreshResponse>
    reloadSearchAnalyzers<TContext = unknown>(params?: T.ReloadSearchAnalyzersRequest, options?: any): Promise<T.ReloadSearchAnalyzersResponse>
    resolveIndex<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    rollover<TContext = unknown>(params?: T.RolloverIndexRequest, options?: any): Promise<T.RolloverIndexResponse>
    segments<TContext = unknown>(params?: T.SegmentsRequest, options?: any): Promise<T.SegmentsResponse>
    shardStores<TContext = unknown>(params?: T.IndicesShardStoresRequest, options?: any): Promise<T.IndicesShardStoresResponse>
    shrink<TContext = unknown>(params?: T.ShrinkIndexRequest, options?: any): Promise<T.ShrinkIndexResponse>
    simulateIndexTemplate<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    simulateTemplate<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    split<TContext = unknown>(params?: T.SplitIndexRequest, options?: any): Promise<T.SplitIndexResponse>
    stats<TContext = unknown>(params?: T.IndicesStatsRequest, options?: any): Promise<T.IndicesStatsResponse>
    unfreeze<TContext = unknown>(params?: T.UnfreezeIndexRequest, options?: any): Promise<T.UnfreezeIndexResponse>
    updateAliases<TContext = unknown>(params?: T.BulkAliasRequest, options?: any): Promise<T.BulkAliasResponse>
    upgrade<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    validateQuery<TContext = unknown>(params?: T.ValidateQueryRequest, options?: any): Promise<T.ValidateQueryResponse>
  }
  info<TContext = unknown>(params?: T.RootNodeInfoRequest, options?: any): Promise<T.RootNodeInfoResponse>
  ingest: {
    deletePipeline<TContext = unknown>(params?: T.DeletePipelineRequest, options?: any): Promise<T.DeletePipelineResponse>
    getPipeline<TContext = unknown>(params?: T.GetPipelineRequest, options?: any): Promise<T.GetPipelineResponse>
    processorGrok<TContext = unknown>(params?: T.GrokProcessorPatternsRequest, options?: any): Promise<T.GrokProcessorPatternsResponse>
    putPipeline<TContext = unknown>(params?: T.PutPipelineRequest, options?: any): Promise<T.PutPipelineResponse>
    simulate<TContext = unknown>(params?: T.SimulatePipelineRequest, options?: any): Promise<T.SimulatePipelineResponse>
  }
  license: {
    delete<TContext = unknown>(params?: T.DeleteLicenseRequest, options?: any): Promise<T.DeleteLicenseResponse>
    get<TContext = unknown>(params?: T.GetLicenseRequest, options?: any): Promise<T.GetLicenseResponse>
    getBasicStatus<TContext = unknown>(params?: T.GetBasicLicenseStatusRequest, options?: any): Promise<T.GetBasicLicenseStatusResponse>
    getTrialStatus<TContext = unknown>(params?: T.GetTrialLicenseStatusRequest, options?: any): Promise<T.GetTrialLicenseStatusResponse>
    post<TContext = unknown>(params?: T.PostLicenseRequest, options?: any): Promise<T.PostLicenseResponse>
    postStartBasic<TContext = unknown>(params?: T.StartBasicLicenseRequest, options?: any): Promise<T.StartBasicLicenseResponse>
    postStartTrial<TContext = unknown>(params?: T.StartTrialLicenseRequest, options?: any): Promise<T.StartTrialLicenseResponse>
  }
  mget<TContext = unknown>(params?: T.MultiGetRequest, options?: any): Promise<T.MultiGetResponse>
  migration: {
    deprecations<TContext = unknown>(params?: T.DeprecationInfoRequest, options?: any): Promise<T.DeprecationInfoResponse>
  }
  ml: {
    closeJob<TContext = unknown>(params?: T.CloseJobRequest, options?: any): Promise<T.CloseJobResponse>
    deleteCalendar<TContext = unknown>(params?: T.DeleteCalendarRequest, options?: any): Promise<T.DeleteCalendarResponse>
    deleteCalendarEvent<TContext = unknown>(params?: T.DeleteCalendarEventRequest, options?: any): Promise<T.DeleteCalendarEventResponse>
    deleteCalendarJob<TContext = unknown>(params?: T.DeleteCalendarJobRequest, options?: any): Promise<T.DeleteCalendarJobResponse>
    deleteDataFrameAnalytics<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    deleteDatafeed<TContext = unknown>(params?: T.DeleteDatafeedRequest, options?: any): Promise<T.DeleteDatafeedResponse>
    deleteExpiredData<TContext = unknown>(params?: T.DeleteExpiredDataRequest, options?: any): Promise<T.DeleteExpiredDataResponse>
    deleteFilter<TContext = unknown>(params?: T.DeleteFilterRequest, options?: any): Promise<T.DeleteFilterResponse>
    deleteForecast<TContext = unknown>(params?: T.DeleteForecastRequest, options?: any): Promise<T.DeleteForecastResponse>
    deleteJob<TContext = unknown>(params?: T.DeleteJobRequest, options?: any): Promise<T.DeleteJobResponse>
    deleteModelSnapshot<TContext = unknown>(params?: T.DeleteModelSnapshotRequest, options?: any): Promise<T.DeleteModelSnapshotResponse>
    deleteTrainedModel<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    estimateModelMemory<TContext = unknown>(params?: T.EstimateModelMemoryRequest, options?: any): Promise<T.EstimateModelMemoryResponse>
    evaluateDataFrame<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    explainDataFrameAnalytics<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    findFileStructure<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    flushJob<TContext = unknown>(params?: T.FlushJobRequest, options?: any): Promise<T.FlushJobResponse>
    forecast<TContext = unknown>(params?: T.ForecastJobRequest, options?: any): Promise<T.ForecastJobResponse>
    getBuckets<TContext = unknown>(params?: T.GetBucketsRequest, options?: any): Promise<T.GetBucketsResponse>
    getCalendarEvents<TContext = unknown>(params?: T.GetCalendarEventsRequest, options?: any): Promise<T.GetCalendarEventsResponse>
    getCalendars<TContext = unknown>(params?: T.GetCalendarsRequest, options?: any): Promise<T.GetCalendarsResponse>
    getCategories<TContext = unknown>(params?: T.GetCategoriesRequest, options?: any): Promise<T.GetCategoriesResponse>
    getDataFrameAnalytics<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    getDataFrameAnalyticsStats<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    getDatafeedStats<TContext = unknown>(params?: T.GetDatafeedStatsRequest, options?: any): Promise<T.GetDatafeedStatsResponse>
    getDatafeeds<TContext = unknown>(params?: T.GetDatafeedsRequest, options?: any): Promise<T.GetDatafeedsResponse>
    getFilters<TContext = unknown>(params?: T.GetFiltersRequest, options?: any): Promise<T.GetFiltersResponse>
    getInfluencers<TContext = unknown>(params?: T.GetInfluencersRequest, options?: any): Promise<T.GetInfluencersResponse>
    getJobStats<TContext = unknown>(params?: T.GetJobStatsRequest, options?: any): Promise<T.GetJobStatsResponse>
    getJobs<TContext = unknown>(params?: T.GetJobsRequest, options?: any): Promise<T.GetJobsResponse>
    getModelSnapshots<TContext = unknown>(params?: T.GetModelSnapshotsRequest, options?: any): Promise<T.GetModelSnapshotsResponse>
    getOverallBuckets<TContext = unknown>(params?: T.GetOverallBucketsRequest, options?: any): Promise<T.GetOverallBucketsResponse>
    getRecords<TContext = unknown>(params?: T.GetAnomalyRecordsRequest, options?: any): Promise<T.GetAnomalyRecordsResponse>
    getTrainedModels<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    getTrainedModelsStats<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    info<TContext = unknown>(params?: T.MachineLearningInfoRequest, options?: any): Promise<T.MachineLearningInfoResponse>
    openJob<TContext = unknown>(params?: T.OpenJobRequest, options?: any): Promise<T.OpenJobResponse>
    postCalendarEvents<TContext = unknown>(params?: T.PostCalendarEventsRequest, options?: any): Promise<T.PostCalendarEventsResponse>
    postData<TContext = unknown>(params?: T.PostJobDataRequest, options?: any): Promise<T.PostJobDataResponse>
    previewDatafeed<TDocument, TContext = unknown>(params?: T.PreviewDatafeedRequest, options?: any): Promise<T.PreviewDatafeedResponse<TDocument>>
    putCalendar<TContext = unknown>(params?: T.PutCalendarRequest, options?: any): Promise<T.PutCalendarResponse>
    putCalendarJob<TContext = unknown>(params?: T.PutCalendarJobRequest, options?: any): Promise<T.PutCalendarJobResponse>
    putDataFrameAnalytics<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    putDatafeed<TContext = unknown>(params?: T.PutDatafeedRequest, options?: any): Promise<T.PutDatafeedResponse>
    putFilter<TContext = unknown>(params?: T.PutFilterRequest, options?: any): Promise<T.PutFilterResponse>
    putJob<TContext = unknown>(params?: T.PutJobRequest, options?: any): Promise<T.PutJobResponse>
    putTrainedModel<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    revertModelSnapshot<TContext = unknown>(params?: T.RevertModelSnapshotRequest, options?: any): Promise<T.RevertModelSnapshotResponse>
    setUpgradeMode<TContext = unknown>(params?: T.SetUpgradeModeRequest, options?: any): Promise<T.SetUpgradeModeResponse>
    startDataFrameAnalytics<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    startDatafeed<TContext = unknown>(params?: T.StartDatafeedRequest, options?: any): Promise<T.StartDatafeedResponse>
    stopDataFrameAnalytics<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    stopDatafeed<TContext = unknown>(params?: T.StopDatafeedRequest, options?: any): Promise<T.StopDatafeedResponse>
    updateDataFrameAnalytics<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    updateDatafeed<TContext = unknown>(params?: T.UpdateDatafeedRequest, options?: any): Promise<T.UpdateDatafeedResponse>
    updateFilter<TContext = unknown>(params?: T.UpdateFilterRequest, options?: any): Promise<T.UpdateFilterResponse>
    updateJob<TContext = unknown>(params?: T.UpdateJobRequest, options?: any): Promise<T.UpdateJobResponse>
    updateModelSnapshot<TContext = unknown>(params?: T.UpdateModelSnapshotRequest, options?: any): Promise<T.UpdateModelSnapshotResponse>
    validate<TContext = unknown>(params?: T.ValidateJobRequest, options?: any): Promise<T.ValidateJobResponse>
    validateDetector<TContext = unknown>(params?: T.ValidateDetectorRequest, options?: any): Promise<T.ValidateDetectorResponse>
  }
  monitoring: {
    bulk<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
  }
  msearch<TContext = unknown>(params?: T.MultiSearchRequest, options?: any): Promise<T.MultiSearchResponse>
  msearchTemplate<TContext = unknown>(params?: T.MultiSearchTemplateRequest, options?: any): Promise<TODO>
  mtermvectors<TContext = unknown>(params?: T.MultiTermVectorsRequest, options?: any): Promise<T.MultiTermVectorsResponse>
  nodes: {
    hotThreads<TContext = unknown>(params?: T.NodesHotThreadsRequest, options?: any): Promise<T.NodesHotThreadsResponse>
    info<TContext = unknown>(params?: T.NodesInfoRequest, options?: any): Promise<T.NodesInfoResponse>
    reloadSecureSettings<TContext = unknown>(params?: T.ReloadSecureSettingsRequest, options?: any): Promise<T.ReloadSecureSettingsResponse>
    stats<TContext = unknown>(params?: T.NodesStatsRequest, options?: any): Promise<T.NodesStatsResponse>
    usage<TContext = unknown>(params?: T.NodesUsageRequest, options?: any): Promise<T.NodesUsageResponse>
  }
  openPointInTime<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
  ping<TContext = unknown>(params?: T.PingRequest, options?: any): Promise<T.PingResponse>
  putScript<TContext = unknown>(params?: T.PutScriptRequest, options?: any): Promise<T.PutScriptResponse>
  rankEval<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
  reindex<TContext = unknown>(params?: T.ReindexOnServerRequest, options?: any): Promise<T.ReindexOnServerResponse>
  reindexRethrottle<TContext = unknown>(params?: T.ReindexRethrottleRequest, options?: any): Promise<T.ReindexRethrottleResponse>
  renderSearchTemplate<TContext = unknown>(params?: T.RenderSearchTemplateRequest, options?: any): Promise<T.RenderSearchTemplateResponse>
  rollup: {
    deleteJob<TContext = unknown>(params?: T.DeleteRollupJobRequest, options?: any): Promise<T.DeleteRollupJobResponse>
    getJobs<TContext = unknown>(params?: T.GetRollupJobRequest, options?: any): Promise<T.GetRollupJobResponse>
    getRollupCaps<TContext = unknown>(params?: T.GetRollupCapabilitiesRequest, options?: any): Promise<T.GetRollupCapabilitiesResponse>
    getRollupIndexCaps<TContext = unknown>(params?: T.GetRollupIndexCapabilitiesRequest, options?: any): Promise<T.GetRollupIndexCapabilitiesResponse>
    putJob<TContext = unknown>(params?: T.CreateRollupJobRequest, options?: any): Promise<T.CreateRollupJobResponse>
    rollupSearch<TDocument, TContext = unknown>(params?: T.RollupSearchRequest, options?: any): Promise<T.RollupSearchResponse<TDocument>>
    startJob<TContext = unknown>(params?: T.StartRollupJobRequest, options?: any): Promise<T.StartRollupJobResponse>
    stopJob<TContext = unknown>(params?: T.StopRollupJobRequest, options?: any): Promise<T.StopRollupJobResponse>
  }
  scriptsPainlessExecute<TResult, TContext = unknown>(params?: T.ExecutePainlessScriptRequest, options?: any): Promise<T.ExecutePainlessScriptResponse<TResult>>
  scroll<TContext = unknown>(params?: T.ScrollRequest, options?: any): Promise<TODO>
  search<TDocument, TContext = unknown>(params?: T.SearchRequest, options?: any): Promise<T.SearchResponse<TDocument>>
  searchShards<TContext = unknown>(params?: T.SearchShardsRequest, options?: any): Promise<T.SearchShardsResponse>
  searchTemplate<TContext = unknown>(params?: T.SearchTemplateRequest, options?: any): Promise<TODO>
  searchableSnapshots: {
    clearCache<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    mount<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    repositoryStats<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    stats<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
  }
  security: {
    authenticate<TContext = unknown>(params?: T.AuthenticateRequest, options?: any): Promise<T.AuthenticateResponse>
    changePassword<TContext = unknown>(params?: T.ChangePasswordRequest, options?: any): Promise<T.ChangePasswordResponse>
    clearApiKeyCache<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    clearCachedPrivileges<TContext = unknown>(params?: TODO, options?: any): Promise<TODO>
    clearCachedRealms<TContext = unknown>(params?: T.ClearCachedRealmsRequest, options?: any): Promise<T.ClearCachedRealmsResponse>
    clearCachedRoles<TContext = unknown>(params?: T.ClearCachedRolesRequest, options?: any): Promise<T.ClearCachedRolesResponse>
    createApiKey<TContext = unknown>(params?: T.CreateApiKeyRequest, options?: any): Promise<T.CreateApiKeyResponse>
    deletePrivileges<TContext = unknown>(params?: T.DeletePrivilegesRequest, options?: any): Promise<T.DeletePrivilegesResponse>
    deleteRole<TContext = unknown>(params?: T.DeleteRoleRequest, options?: any): Promise<T.DeleteRoleResponse>
    deleteRoleMapping<TContext = unknown>(params?: T.DeleteRoleMappingRequest, options?: any): Promise<T.DeleteRoleMappingResponse>
    deleteUser<TContext = unknown>(params?: T.DeleteUserRequest, options?: any): Promise<T.DeleteUserResponse>
    disableUser<TContext = unknown>(params?: T.DisableUserRequest, options?: any): Promise<T.DisableUserResponse>
    enableUser<TContext = unknown>(params?: T.EnableUserRequest, options?: any): Promise<T.EnableUserResponse>
    getApiKey<TContext = unknown>(params?: T.GetApiKeyRequest, options?: any): Promise<T.GetApiKeyResponse>
    getBuiltinPrivileges<TContext = unknown>(params?: T.GetBuiltinPrivilegesRequest, options?: any): Promise<T.GetBuiltinPrivilegesResponse>
    getPrivileges<TContext = unknown>(params?: T.GetPrivilegesRequest, options?: any): Promise<T.GetPrivilegesResponse>
    getRole<TContext = unknown>(params?: T.GetRoleRequest, options?: any): Promise<T.GetRoleResponse>
    getRoleMapping<TContext = unknown>(params?: T.GetRoleMappingRequest, options?: any): Promise<T.GetRoleMappingResponse>
    getToken<TContext = unknown>(params?: T.GetUserAccessTokenRequest, options?: any): Promise<T.GetUserAccessTokenResponse>
    getUser<TContext = unknown>(params?: T.GetUserRequest, options?: any): Promise<T.GetUserResponse>
    getUserPrivileges<TContext = unknown>(params?: T.GetUserPrivilegesRequest, options?: any): Promise<T.GetUserPrivilegesResponse>
    hasPrivileges<TContext = unknown>(params?: T.HasPrivilegesRequest, options?: any): Promise<T.HasPrivilegesResponse>
    invalidateApiKey<TContext = unknown>(params?: T.InvalidateApiKeyRequest, options?: any): Promise<T.InvalidateApiKeyResponse>
    invalidateToken<TContext = unknown>(params?: T.InvalidateUserAccessTokenRequest, options?: any): Promise<T.InvalidateUserAccessTokenResponse>
    putPrivileges<TContext = unknown>(params?: T.PutPrivilegesRequest, options?: any): Promise<T.PutPrivilegesResponse>
    putRole<TContext = unknown>(params?: T.PutRoleRequest, options?: any): Promise<T.PutRoleResponse>
    putRoleMapping<TContext = unknown>(params?: T.PutRoleMappingRequest, options?: any): Promise<T.PutRoleMappingResponse>
    putUser<TContext = unknown>(params?: T.PutUserRequest, options?: any): Promise<T.PutUserResponse>
  }
  slm: {
    deleteLifecycle<TContext = unknown>(params?: T.DeleteSnapshotLifecycleRequest, options?: any): Promise<T.DeleteSnapshotLifecycleResponse>
    executeLifecycle<TContext = unknown>(params?: T.ExecuteSnapshotLifecycleRequest, options?: any): Promise<T.ExecuteSnapshotLifecycleResponse>
    executeRetention<TContext = unknown>(params?: T.ExecuteRetentionRequest, options?: any): Promise<T.ExecuteRetentionResponse>
    getLifecycle<TContext = unknown>(params?: T.GetSnapshotLifecycleRequest, options?: any): Promise<T.GetSnapshotLifecycleResponse>
    getStats<TContext = unknown>(params?: T.GetSnapshotLifecycleStatsRequest, options?: any): Promise<T.GetSnapshotLifecycleStatsResponse>
    getStatus<TContext = unknown>(params?: T.GetSnapshotLifecycleManagementStatusRequest, options?: any): Promise<T.GetSnapshotLifecycleManagementStatusResponse>
    putLifecycle<TContext = unknown>(params?: T.PutSnapshotLifecycleRequest, options?: any): Promise<T.PutSnapshotLifecycleResponse>
    start<TContext = unknown>(params?: T.StartSnapshotLifecycleManagementRequest, options?: any): Promise<T.StartSnapshotLifecycleManagementResponse>
    stop<TContext = unknown>(params?: T.StopSnapshotLifecycleManagementRequest, options?: any): Promise<T.StopSnapshotLifecycleManagementResponse>
  }
  snapshot: {
    cleanupRepository<TContext = unknown>(params?: T.CleanupRepositoryRequest, options?: any): Promise<T.CleanupRepositoryResponse>
    create<TContext = unknown>(params?: T.SnapshotRequest, options?: any): Promise<T.SnapshotResponse>
    createRepository<TContext = unknown>(params?: T.CreateRepositoryRequest, options?: any): Promise<T.CreateRepositoryResponse>
    delete<TContext = unknown>(params?: T.DeleteSnapshotRequest, options?: any): Promise<T.DeleteSnapshotResponse>
    deleteRepository<TContext = unknown>(params?: T.DeleteRepositoryRequest, options?: any): Promise<T.DeleteRepositoryResponse>
    get<TContext = unknown>(params?: T.GetSnapshotRequest, options?: any): Promise<T.GetSnapshotResponse>
    getRepository<TContext = unknown>(params?: T.GetRepositoryRequest, options?: any): Promise<T.GetRepositoryResponse>
    restore<TContext = unknown>(params?: T.RestoreRequest, options?: any): Promise<T.RestoreResponse>
    status<TContext = unknown>(params?: T.SnapshotStatusRequest, options?: any): Promise<T.SnapshotStatusResponse>
    verifyRepository<TContext = unknown>(params?: T.VerifyRepositoryRequest, options?: any): Promise<T.VerifyRepositoryResponse>
  }
  sql: {
    clearCursor<TContext = unknown>(params?: T.ClearSqlCursorRequest, options?: any): Promise<T.ClearSqlCursorResponse>
    query<TContext = unknown>(params?: T.QuerySqlRequest, options?: any): Promise<T.QuerySqlResponse>
    translate<TContext = unknown>(params?: T.TranslateSqlRequest, options?: any): Promise<T.TranslateSqlResponse>
  }
  ssl: {
    certificates<TContext = unknown>(params?: T.GetCertificatesRequest, options?: any): Promise<T.GetCertificatesResponse>
  }
  tasks: {
    cancel<TContext = unknown>(params?: T.CancelTasksRequest, options?: any): Promise<T.CancelTasksResponse>
    get<TContext = unknown>(params?: T.GetTaskRequest, options?: any): Promise<T.GetTaskResponse>
    list<TContext = unknown>(params?: T.ListTasksRequest, options?: any): Promise<T.ListTasksResponse>
  }
  termvectors<TDocument, TContext = unknown>(params?: T.TermVectorsRequest<TDocument>, options?: any): Promise<T.TermVectorsResponse>
  transform: {
    deleteTransform<TContext = unknown>(params?: T.DeleteTransformRequest, options?: any): Promise<T.DeleteTransformResponse>
    getTransform<TContext = unknown>(params?: T.GetTransformRequest, options?: any): Promise<T.GetTransformResponse>
    getTransformStats<TContext = unknown>(params?: T.GetTransformStatsRequest, options?: any): Promise<T.GetTransformStatsResponse>
    previewTransform<TTransform, TContext = unknown>(params?: T.PreviewTransformRequest, options?: any): Promise<T.PreviewTransformResponse<TTransform>>
    putTransform<TContext = unknown>(params?: T.PutTransformRequest, options?: any): Promise<T.PutTransformResponse>
    startTransform<TContext = unknown>(params?: T.StartTransformRequest, options?: any): Promise<T.StartTransformResponse>
    stopTransform<TContext = unknown>(params?: T.StopTransformRequest, options?: any): Promise<T.StopTransformResponse>
    updateTransform<TContext = unknown>(params?: T.UpdateTransformRequest, options?: any): Promise<T.UpdateTransformResponse>
  }
  update<TDocumentRes, TDocumentReq, TPartialDocument, TContext = unknown>(params?: T.UpdateRequest<TDocumentReq, TPartialDocument>, options?: any): Promise<T.UpdateResponse<TDocumentRes>>
  updateByQuery<TContext = unknown>(params?: T.UpdateByQueryRequest, options?: any): Promise<T.UpdateByQueryResponse>
  updateByQueryRethrottle<TContext = unknown>(params?: T.UpdateByQueryRethrottleRequest, options?: any): Promise<TODO>
  watcher: {
    ackWatch<TContext = unknown>(params?: T.AcknowledgeWatchRequest, options?: any): Promise<T.AcknowledgeWatchResponse>
    activateWatch<TContext = unknown>(params?: T.ActivateWatchRequest, options?: any): Promise<T.ActivateWatchResponse>
    deactivateWatch<TContext = unknown>(params?: T.DeactivateWatchRequest, options?: any): Promise<T.DeactivateWatchResponse>
    deleteWatch<TContext = unknown>(params?: T.DeleteWatchRequest, options?: any): Promise<T.DeleteWatchResponse>
    executeWatch<TContext = unknown>(params?: T.ExecuteWatchRequest, options?: any): Promise<T.ExecuteWatchResponse>
    getWatch<TContext = unknown>(params?: T.GetWatchRequest, options?: any): Promise<T.GetWatchResponse>
    putWatch<TContext = unknown>(params?: T.PutWatchRequest, options?: any): Promise<T.PutWatchResponse>
    start<TContext = unknown>(params?: T.StartWatcherRequest, options?: any): Promise<T.StartWatcherResponse>
    stats<TContext = unknown>(params?: T.WatcherStatsRequest, options?: any): Promise<T.WatcherStatsResponse>
    stop<TContext = unknown>(params?: T.StopWatcherRequest, options?: any): Promise<T.StopWatcherResponse>
  }
  xpack: {
    info<TContext = unknown>(params?: T.XPackInfoRequest, options?: any): Promise<T.XPackInfoResponse>
    usage<TContext = unknown>(params?: T.XPackUsageRequest, options?: any): Promise<T.XPackUsageResponse>
  }
}

export default ESAPI
