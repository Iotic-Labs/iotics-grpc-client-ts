/**
 * @license
 * Copyright © 2022 IOTIC LABS LTD. info@iotics.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://github.com/Iotic-Labs/iotics-grpc-client-ts/blob/main/LICENSE
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * SPDX-License-Identifier: Apache-2.0
 */
import {
    LangLiteral,
    Literal,
    Property,
    StringLiteral,
    Uri,
} from './client/iotics/api/common_pb';

export enum PropertyType {
    Uri = 'Uri',
    Literal = 'Literal',
    StringLiteral = 'StringLiteral',
    LangLiteral = 'LangLiteral',
}

export const createProperty = (
    propKey: string,
    propValue: string,
    propertyType: PropertyType,
    dataType?: string,
    lang?: string,
) => {
    const property = new Property();
    property.setKey(propKey);

    switch (propertyType) {
        case PropertyType.LangLiteral: {
            const langLiteral = new LangLiteral();
            langLiteral.setLang(lang ?? 'en');
            langLiteral.setValue(propValue);
            property.setLangliteralvalue(langLiteral);
            break;
        }
        case PropertyType.Literal: {
            const literal = new Literal();
            literal.setValue(propValue);
            literal.setDatatype(dataType ?? 'string');
            property.setLiteralvalue(literal);
            break;
        }
        case PropertyType.Uri: {
            const uri = new Uri();
            uri.setValue(propValue);
            property.setUrivalue(uri);
            break;
        }
        default: {
            const stringLiteral = new StringLiteral();
            stringLiteral.setValue(propValue);
            property.setStringliteralvalue(stringLiteral);
            break;
        }
    }

    return property;
};
