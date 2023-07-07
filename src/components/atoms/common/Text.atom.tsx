/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {NativeSyntheticEvent} from 'react-native';
import {TextLayoutEventData} from 'react-native';
import {Text, TextStyle} from 'react-native';
import {colors} from '../../../utils/colors';

export type TTextTypeKey =
  | 'Heading1'
  | 'Heading2'
  | 'Heading3'
  | 'Heading4'
  | 'Heading5'
  | 'Title1'
  | 'Title2'
  | 'Title3'
  | 'Title4'
  | 'Title5'
  | 'Title6'
  | 'Title7'
  | 'Title8'
  | 'Title9'
  | 'Body1'
  | 'Body2'
  | 'Body3'
  | 'Body4'
  | 'Body5'
  | 'Body6'
  | 'Body7'
  | 'Body8'
  | 'category';
export type TTextTypeProps = TTextTypeKey;

interface ITextProps {
  text: string | number | undefined;
  style?: TextStyle;
  type: TTextTypeProps;
  color?: string;
  numberOfLines?: number;
  onTextLayout?:
    | ((event: NativeSyntheticEvent<TextLayoutEventData>) => void)
    | undefined;
  lineHeight?: number;
  isBold?: boolean;
}
const onTitleTxtStyle = (
  type: TTextTypeProps,
  color: string | undefined,
  lineHeight?: number,
  isBold?: boolean,
) => {
  const Heading1: TextStyle = {
    fontSize: 36,
    fontFamily: 'Pretendard-ExtraBold',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 40,
    fontWeight: isBold ? '700' : null,
  };
  const Heading2: TextStyle = {
    fontSize: 20,
    fontFamily: 'Pretendard-Bold',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 23,
    fontWeight: isBold ? '700' : null,
  };
  const Heading3: TextStyle = {
    fontSize: 20,
    fontFamily: 'Pretendard-SemiBold',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 23,
    fontWeight: isBold ? '700' : null,
  };
  const Heading4: TextStyle = {
    fontSize: 17,
    fontFamily: 'Pretendard-Medium',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 20,
    fontWeight: isBold ? '700' : null,
  };
  const Heading5: TextStyle = {
    fontSize: 16,
    fontFamily: 'Pretendard-Bold',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 19,
    fontWeight: isBold ? '700' : null,
  };
  const Title1: TextStyle = {
    fontSize: 24,
    fontFamily: 'Pretendard-ExtraBold',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 27,
    fontWeight: isBold ? '700' : null,
  };
  const Title2: TextStyle = {
    fontSize: 18,
    fontFamily: 'Pretendard-SemiBold',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 21,
    fontWeight: isBold ? '700' : null,
  };
  const Title3: TextStyle = {
    fontSize: 15,
    fontFamily: 'Pretendard-Medium',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 17,
    fontWeight: isBold ? '700' : null,
  };
  const Title4: TextStyle = {
    fontSize: 14,
    fontFamily: 'Pretendard-Bold',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 16,
    fontWeight: isBold ? '700' : null,
  };
  const Title5: TextStyle = {
    fontSize: 14,
    fontFamily: 'Pretendard-SemiBold',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 16,
    fontWeight: isBold ? '700' : null,
  };
  const Title6: TextStyle = {
    fontSize: 24,
    fontFamily: 'Pretendard-Regular',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 26,
    fontWeight: isBold ? '700' : null,
  };
  const Title7: TextStyle = {
    fontSize: 22,
    fontFamily: 'Pretendard-Bold',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 24,
    fontWeight: isBold ? '700' : null,
  };
  const Title8: TextStyle = {
    fontSize: 22,
    fontFamily: 'Pretendard-Bold',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 24,
    fontWeight: isBold ? '700' : null,
  };
  const Title9: TextStyle = {
    fontSize: 18,
    fontFamily: 'Pretendard-Regular',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 24,
    fontWeight: isBold ? '700' : null,
  };
  const Body1: TextStyle = {
    fontSize: 15,
    fontFamily: 'Pretendard-Regular',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 17,
    fontWeight: isBold ? '700' : null,
  };
  const Body2: TextStyle = {
    fontSize: 14,
    fontFamily: 'Pretendard-Regular',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 16,
    fontWeight: isBold ? '700' : null,
  };
  const Body3: TextStyle = {
    fontSize: 13,
    fontFamily: 'Pretendard-Regular',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 15,
    fontWeight: isBold ? '700' : null,
  };
  const Body4: TextStyle = {
    fontSize: 12,
    fontFamily: 'Pretendard-Medium',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 14,
    fontWeight: isBold ? '700' : null,
  };
  const Body5: TextStyle = {
    fontSize: 12,
    fontFamily: 'Pretendard-Regular',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 14,
    fontWeight: isBold ? '700' : null,
  };
  const Body6: TextStyle = {
    fontSize: 16,
    fontFamily: 'Pretendard-Bold',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 18,
    fontWeight: isBold ? '700' : null,
  };
  const Body7: TextStyle = {
    fontSize: 14,
    fontFamily: 'Pretendard-Regular',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 16,
    fontWeight: isBold ? '700' : null,
  };
  const Body8: TextStyle = {
    fontSize: 16,
    fontFamily: 'Pretendard-Regular',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : 18,
    fontWeight: isBold ? '700' : null,
  };
  const category: TextStyle = {
    fontSize: 12,
    fontFamily: 'Pretendard-Medium',
    color: color ? color : colors.black,
    lineHeight: lineHeight ? lineHeight : null,
    fontWeight: isBold ? '700' : null,
  };
  switch (type) {
    case 'Heading1':
      return Heading1;
    case 'Heading2':
      return Heading2;
    case 'Heading3':
      return Heading3;
    case 'Heading4':
      return Heading4;
    case 'Heading5':
      return Heading5;
    case 'Title1':
      return Title1;
    case 'Title2':
      return Title2;
    case 'Title3':
      return Title3;
    case 'Title4':
      return Title4;
    case 'Title5':
      return Title5;
    case 'Title6':
      return Title6;
    case 'Title7':
      return Title7;
    case 'Title8':
      return Title8;
    case 'Title9':
      return Title9;
    case 'Body1':
      return Body1;
    case 'Body2':
      return Body2;
    case 'Body3':
      return Body3;
    case 'Body4':
      return Body4;
    case 'Body5':
      return Body5;
    case 'Body6':
      return Body6;
    case 'Body7':
      return Body7;
    case 'Body8':
      return Body8;
    case 'category':
      return category;
  }
};
const TextAtom = (props: ITextProps) => {
  return (
    <Text
      style={[
        props.style,
        onTitleTxtStyle(
          props.type,
          props.color,
          props.lineHeight,
          props.isBold,
        ),
      ]}
      numberOfLines={props.numberOfLines}
      onTextLayout={props.onTextLayout}>
      {props.text}
    </Text>
  );
};

export default TextAtom;
