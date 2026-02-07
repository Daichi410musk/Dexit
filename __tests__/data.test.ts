import { describe, it, expect } from "vitest";
import { destinations } from "../app/data";

describe("destinations data", () => {
  it("全ての目的地にidとnameがある", () => {
    for (const d of destinations) {
      expect(d.id).toBeTruthy();
      expect(d.name).toBeTruthy();
    }
  });

  it("idが重複していない", () => {
    const ids = destinations.map((d) => d.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("出口タイプにはステップがある", () => {
    const exits = destinations.filter((d) => d.type === "exit");
    for (const exit of exits) {
      expect(exit.steps.length).toBeGreaterThan(0);
    }
  });

  it("直通の目的地にはステップがある", () => {
    const directPlaces = destinations.filter((d) => d.direct);
    for (const place of directPlaces) {
      expect(place.steps.length).toBeGreaterThan(0);
    }
  });

  it("非直通の目的地にはexitIdがあり、対応する出口が存在する", () => {
    const nonDirectPlaces = destinations.filter(
      (d) => d.type === "place" && !d.direct
    );
    for (const place of nonDirectPlaces) {
      expect(place.exitId).toBeTruthy();
      const exit = destinations.find((d) => d.id === place.exitId);
      expect(exit).toBeDefined();
      expect(exit!.type).toBe("exit");
    }
  });

  it("閉館済みの施設が含まれていない", () => {
    const names = destinations.map((d) => d.name);
    expect(names).not.toContain("ミロード");
    expect(names).not.toContain("小田急百貨店 新宿店");
  });
});
