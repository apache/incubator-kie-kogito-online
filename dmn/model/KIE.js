/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var KIE_Module_Factory = function () {
  var KIE = {
    name: 'KIE',
    defaultElementNamespaceURI: 'http:\/\/www.drools.org\/kie\/dmn\/1.2',
    typeInfos: [{
        localName: 'TAttachment',
        typeName: 'tAttachment',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'url',
            attributeName: {
              localPart: 'url'
            },
            type: 'attribute'
          }, {
            name: 'name',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TComponentsWidthsExtension',
        typeName: 'tComponentsWidthsExtension',
        propertyInfos: [{
            name: 'componentWidths',
            minOccurs: 0,
            collection: true,
            elementName: 'ComponentWidths',
            typeInfo: '.TComponentWidths'
          }]
      }, {
        localName: 'TComponentWidths',
        typeName: 'tComponentWidths',
        propertyInfos: [{
            name: 'width',
            minOccurs: 0,
            collection: true,
            typeInfo: 'Float'
          }, {
            name: 'dmnElementRef',
            attributeName: {
              localPart: 'dmnElementRef'
            },
            type: 'attribute'
          }]
      }],
    elementInfos: [{
        typeInfo: '.TComponentsWidthsExtension',
        elementName: 'ComponentsWidthsExtension'
      }, {
        typeInfo: '.TAttachment',
        elementName: 'attachment'
      }, {
        typeInfo: '.TComponentWidths',
        elementName: 'ComponentWidths'
      }]
  };
  return {
    KIE: KIE
  };
};
if (typeof define === 'function' && define.amd) {
  define([], KIE_Module_Factory);
}
else {
  var KIE_Module = KIE_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.KIE = KIE_Module.KIE;
  }
  else {
    var KIE = KIE_Module.KIE;
  }
}