import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach, vi } from "vitest";
import Home from "../app/page";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    back: vi.fn(),
  }),
}));

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

  it("目的地入力フォームが表示される", () => {
    render(<Home />);
    expect(screen.getByLabelText("目的地を入力")).toBeInTheDocument();
  });

  it("出口の案内セクションが表示される", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 2, name: "出口の案内を見る" })
    ).toBeInTheDocument();
    expect(screen.getByText("JR新宿駅 西口（地上）")).toBeInTheDocument();
    expect(screen.getByText("JR新宿駅 東口（地上）")).toBeInTheDocument();
    expect(screen.getByText("JR新宿駅 南口")).toBeInTheDocument();
    expect(screen.getByText("JR新宿駅 新南口")).toBeInTheDocument();
  });

  it("よく使う目的地セクションが表示される", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 2, name: "よく使う目的地" })
    ).toBeInTheDocument();
    expect(screen.getByText("一覧を見る →")).toBeInTheDocument();
  });
});
