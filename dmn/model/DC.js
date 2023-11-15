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

var DC_Module_Factory = function () {
  var DC = {
    name: 'DC',
    defaultElementNamespaceURI: 'http:\/\/www.omg.org\/spec\/DMN\/20180521\/DC\/',
    typeInfos: [{
        localName: 'Dimension',
        propertyInfos: [{
            name: 'width',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'height',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'height'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Color',
        propertyInfos: [{
            name: 'red',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'red'
            },
            type: 'attribute'
          }, {
            name: 'green',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'green'
            },
            type: 'attribute'
          }, {
            name: 'blue',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'blue'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Point',
        propertyInfos: [{
            name: 'x',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'x'
            },
            type: 'attribute'
          }, {
            name: 'y',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'y'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Bounds',
        propertyInfos: [{
            name: 'x',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'x'
            },
            type: 'attribute'
          }, {
            name: 'y',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'y'
            },
            type: 'attribute'
          }, {
            name: 'width',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'height',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'height'
            },
            type: 'attribute'
          }]
      }, {
        type: 'enumInfo',
        localName: 'AlignmentKind',
        values: ['start', 'end', 'center']
      }, {
        type: 'enumInfo',
        localName: 'KnownColor',
        values: ['maroon', 'red', 'orange', 'yellow', 'olive', 'purple', 'fuchsia', 'white', 'lime', 'green', 'navy', 'blue', 'aqua', 'teal', 'black', 'silver', 'gray']
      }],
    elementInfos: [{
        typeInfo: '.Dimension',
        elementName: 'Dimension'
      }, {
        typeInfo: '.Bounds',
        elementName: 'Bounds'
      }, {
        typeInfo: '.Color',
        elementName: 'Color'
      }, {
        typeInfo: '.Point',
        elementName: 'Point'
      }]
  };
  return {
    DC: DC
  };
};
if (typeof define === 'function' && define.amd) {
  define([], DC_Module_Factory);
}
else {
  var DC_Module = DC_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.DC = DC_Module.DC;
  }
  else {
    var DC = DC_Module.DC;
  }
}