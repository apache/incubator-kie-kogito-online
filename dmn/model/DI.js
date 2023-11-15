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

var DI_Module_Factory = function () {
  var DI = {
    name: 'DI',
    defaultElementNamespaceURI: 'http:\/\/www.omg.org\/spec\/DMN\/20180521\/DI\/',
    dependencies: ['DC'],
    typeInfos: [{
        localName: 'Shape',
        baseTypeInfo: '.DiagramElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'bounds',
            elementName: {
              localPart: 'Bounds',
              namespaceURI: 'http:\/\/www.omg.org\/spec\/DMN\/20180521\/DC\/'
            },
            typeInfo: 'DC.Bounds'
          }]
      }, {
        localName: 'DiagramElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'extension',
            typeInfo: '.DiagramElement.Extension'
          }, {
            name: 'style',
            mixed: false,
            allowDom: false,
            elementName: 'Style',
            typeInfo: '.Style',
            type: 'elementRef'
          }, {
            name: 'sharedStyle',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'sharedStyle'
            },
            type: 'attribute'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Diagram',
        baseTypeInfo: '.DiagramElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'name',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }, {
            name: 'documentation',
            attributeName: {
              localPart: 'documentation'
            },
            type: 'attribute'
          }, {
            name: 'resolution',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'resolution'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DiagramElement.Extension',
        typeName: null,
        propertyInfos: [{
            name: 'any',
            minOccurs: 0,
            collection: true,
            mixed: false,
            type: 'anyElement'
          }]
      }, {
        localName: 'Style',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'extension',
            typeInfo: '.Style.Extension'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Edge',
        baseTypeInfo: '.DiagramElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'waypoint',
            minOccurs: 0,
            collection: true,
            typeInfo: 'DC.Point'
          }]
      }, {
        localName: 'Style.Extension',
        typeName: null,
        propertyInfos: [{
            name: 'any',
            minOccurs: 0,
            collection: true,
            mixed: false,
            type: 'anyElement'
          }]
      }],
    elementInfos: [{
        typeInfo: '.Style',
        elementName: 'Style'
      }]
  };
  return {
    DI: DI
  };
};
if (typeof define === 'function' && define.amd) {
  define([], DI_Module_Factory);
}
else {
  var DI_Module = DI_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.DI = DI_Module.DI;
  }
  else {
    var DI = DI_Module.DI;
  }
}