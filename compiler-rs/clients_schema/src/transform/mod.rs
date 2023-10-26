// Licensed to Elasticsearch B.V. under one or more contributor
// license agreements. See the NOTICE file distributed with
// this work for additional information regarding copyright
// ownership. Elasticsearch B.V. licenses this file to you under
// the Apache License, Version 2.0 (the "License"); you may
// not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

//! Utilities to transform API models and common transformations:
//! * filtering according to availability
//!

mod availability;
mod expand_generics;

use std::collections::HashSet;
use availability::Availability;
use crate::{Availabilities, IndexedModel, TypeName};

/// The working state of a type graph traversal algorithm. It keeps track of the types that
/// have been visited/processed and registers those that still need to be visited.
///
/// Using this structure allows to flatten recursion and also handle recursive data structures
/// by ensuring a type is never visited twice.
///
#[derive(Default)]
pub struct Worksheet {
    visited: HashSet::<TypeName>,
    pending: Vec<TypeName>,
}

impl Worksheet {
    /// Add a type name to the pending work list, if it hasn't already been visited and if it's not
    /// already in the pending list.
    pub fn add(&mut self, name: &TypeName) {
        if !self.visited.contains(name) && !self.pending.contains(name) {
            self.pending.push(name.clone());
        }
    }

    /// Has this type name been visited?
    pub fn was_visited(&self, name: &TypeName) -> bool {
        self.visited.contains(name)
    }
}

impl Iterator for Worksheet {
    type Item = TypeName;

    /// Retrieves a type name from the work list, if some are left. This assumes the caller will
    /// process the corresponding type, and thus adds it to the list of visited type names.
    fn next(&mut self) -> Option<Self::Item> {
        let result = self.pending.pop();
        if let Some(ref name) = result {
            self.visited.insert(name.clone());
        }
        result
    }
}

/// Transform a model to only keep the endpoints and types that match a predicate on the `availability`
/// properties.
///
pub fn filter_availability(
    model: IndexedModel,
    avail_filter: fn(&Option<Availabilities>) -> bool
) -> anyhow::Result<IndexedModel> {
    Availability::filter(model, avail_filter)
}

pub fn expand_generics(
    model: IndexedModel
) -> anyhow::Result<IndexedModel> {
    expand_generics::expand_generics(model)
}
