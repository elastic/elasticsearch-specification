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

import { Dictionary } from "../../__spec_utils/Dictionary";
import { AuditUsage } from "./AuditUsage";
import { IpFilterUsage } from "./IpFilterUsage";
import { RealmUsage } from "./RealmUsage";
import { RoleMappingUsage } from "./RoleMappingUsage";
import { SecurityFeatureToggle } from "./SecurityFeatureToggle";
import { SecurityRolesUsage } from "./SecurityRolesUsage";
import { SslUsage } from "./SslUsage";
import { XPackUsage } from "./XPackUsage";

export class SecurityUsage extends XPackUsage {
  api_key_service: SecurityFeatureToggle;
  anonymous: SecurityFeatureToggle;
  audit: AuditUsage;
  fips_140: SecurityFeatureToggle;
  ipfilter: IpFilterUsage;
  realms: Dictionary<string, RealmUsage>;
  role_mapping: Dictionary<string, RoleMappingUsage>;
  roles: SecurityRolesUsage;
  ssl: SslUsage;
  system_key?: SecurityFeatureToggle;
  token_service: SecurityFeatureToggle;
  operator_privileges: XPackUsage;
}
