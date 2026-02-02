import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import Home from "../app/page";

afterEach(() => {
  cleanup();
});

describe("Home", () => {
  it("ページタイトルが表示される", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "JR新宿駅 出口案内"
    );
  });

  it("6つの目的地が表示される", () => {
    render(<Home />);
    expect(
      screen.getAllByText("JR新宿駅 西口（地上）").length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("JR新宿駅 東口（地上）").length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("JR新宿駅 南口").length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("JR新宿駅 新南口").length
    ).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("バスタ新宿").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("NEWoMan新宿").length).toBeGreaterThanOrEqual(1);
  });

  it("Coming Soonカードが表示される", () => {
    render(<Home />);
    expect(
      screen.getAllByText("他の目的地も準備中...").length
    ).toBeGreaterThanOrEqual(1);
  });

  it("各目的地に出口情報がある", () => {
    render(<Home />);
    expect(
      screen.getAllByText("西改札→西口").length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("東改札→東口").length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("南改札→南口").length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("新南改札(新南口)").length
    ).toBeGreaterThanOrEqual(3);
  });

  it("各カードに道順を見るリンクがある", () => {
    render(<Home />);
    const links = screen.getAllByText("タップで道順を見る");
    expect(links.length).toBe(6);
  });
});
