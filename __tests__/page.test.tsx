import { render, screen, fireEvent, cleanup } from "@testing-library/react";
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

  it("5つの目的地が表示される", () => {
    render(<Home />);
    expect(screen.getAllByText("バスタ新宿").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("NEWoMan新宿").length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("JR新宿駅 西口（地上）").length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("JR新宿駅 東口（地上）").length
    ).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("伊勢丹新宿店").length).toBeGreaterThanOrEqual(1);
  });

  it("Coming Soonカードが表示される", () => {
    render(<Home />);
    expect(
      screen.getAllByText("他の目的地も準備中...").length
    ).toBeGreaterThanOrEqual(1);
  });

  it("カードをクリックすると道順が展開される", () => {
    render(<Home />);

    // 最初は道順が非表示
    expect(screen.queryByText("JR新宿駅 南改札を出る")).not.toBeInTheDocument();

    // バスタ新宿をクリック
    const buttons = screen.getAllByText("バスタ新宿");
    fireEvent.click(buttons[0]);

    // 道順が表示される
    expect(
      screen.getAllByText("JR新宿駅 南改札を出る").length
    ).toBeGreaterThanOrEqual(1);
  });

  it("展開したカードを再クリックすると閉じる", () => {
    render(<Home />);

    const buttons = screen.getAllByText("バスタ新宿");

    // クリックして展開
    fireEvent.click(buttons[0]);
    expect(
      screen.getAllByText("JR新宿駅 南改札を出る").length
    ).toBeGreaterThanOrEqual(1);

    // 再クリックして閉じる
    fireEvent.click(buttons[0]);
    expect(screen.queryByText("JR新宿駅 南改札を出る")).not.toBeInTheDocument();
  });

  it("各目的地に出口情報がある", () => {
    render(<Home />);
    expect(
      screen.getAllByText("南改札→新南口").length
    ).toBeGreaterThanOrEqual(2);
    expect(
      screen.getAllByText("中央西改札→西口").length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("中央東改札→東口").length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("中央東改札→伊勢丹方面").length
    ).toBeGreaterThanOrEqual(1);
  });
});
