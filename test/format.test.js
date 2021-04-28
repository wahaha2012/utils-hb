import utils from "../src";
import format from "../src/format";
import { thousandsSeparatorFormat } from "../src/format";

describe("test format module", () => {
  test("test thousandsSeparatorFormat(-1234567.89)", () => {
    expect(thousandsSeparatorFormat(-1234567.89)).toBe("-1,234,567.89");
    expect(format.thousandsSeparatorFormat(-1234567.89)).toBe("-1,234,567.89");
    expect(utils.format.thousandsSeparatorFormat(-1234567.89)).toBe(
      "-1,234,567.89"
    );
  });

  test("test thousandsSeparatorFormat(1234567.89)", () => {
    expect(thousandsSeparatorFormat(1234567.89)).toBe("1,234,567.89");
  });

  test("test thousandsSeparatorFormat('1234567.89')", () => {
    expect(thousandsSeparatorFormat("1234567.89")).toBe("1,234,567.89");
  });

  test("test thousandsSeparatorFormat(1234567)", () => {
    expect(thousandsSeparatorFormat(1234567)).toBe("1,234,567");
  });

  test("test thousandsSeparatorFormat(-123456)", () => {
    Number.prototype.toLocaleString = null;
    expect(thousandsSeparatorFormat(-123456)).toBe("-123,456");
  });

  test("test thousandsSeparatorFormat()", () => {
    expect(thousandsSeparatorFormat()).toBe("NaN");
  });

  test("formatTime", () => {
    expect(format.formatTime("2021-06-06", "YYYYMM")).toBe("202106");
    expect(format.formatTime()).toBe("");
  });

  test("numberUnitFormat", () => {
    expect(format.numberUnitFormat(100000)).toBe("10.00万");
    expect(format.numberUnitFormat(10000)).toBe("1.00万");
    expect(format.numberUnitFormat(1000)).toBe(1000);
    expect(format.numberUnitFormat(100000000)).toBe("1.00亿");
    expect(format.numberUnitFormat(0)).toBe(0);
  });

  test("formatTimeDiff", () => {
    expect(format.formatTimeDiff()).toBe("");
    expect(format.formatTimeDiff(Date.now() - 2000)).toBe("2秒前");
    expect(format.formatTimeDiff(Date.now() - 2000 * 60)).toBe("2分钟前");
    expect(format.formatTimeDiff(Date.now() - 2000 * 60 * 60)).toBe("2小时前");
    expect(format.formatTimeDiff(Date.now() - 2000 * 60 * 60 * 24)).toBe(
      "2天前"
    );
  });

  test("getSign", () => {
    expect(format.getSign(1)).toBe("+1");
    expect(format.getSign(-1)).toBe(-1);
  });

  test("getSignColor", () => {
    expect(format.getSignColor(1)).toBe("color-red");
    expect(format.getSignColor(-1)).toBe("color-green");
    expect(format.getSignColor(0)).toBe("color-gray");
  });

  test("highlightText", () => {
    expect(format.highlightText(false)).toBe(false);
    expect(format.highlightText("Good Boy", false)).toBe("Good Boy");
    expect(format.highlightText("Good Boy")).toBe("Good Boy");
    expect(format.highlightText("Good Boy", "Boy")).toBe(
      'Good <span class="highlight">Boy</span>'
    );
  });
});
