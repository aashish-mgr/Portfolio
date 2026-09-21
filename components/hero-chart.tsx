"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { heroChartData } from "@/lib/content";

const TEAL = "#3e8e8c";
const GOLD = "#d9a441";

export function HeroChart() {
  const first = heroChartData[0].hours;
  const last = heroChartData[heroChartData.length - 1].hours;
  const growth = Math.round(((last - first) / first) * 100);

  return (
    <figure className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
      <div className="flex items-baseline justify-between gap-4">
        <figcaption className="font-mono text-xs text-muted">
          study hours, last 7 months
        </figcaption>
        <span className="font-mono text-xl font-medium text-gold">
          +{growth}%
        </span>
      </div>
      <div className="mt-5 h-44">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={heroChartData}
            margin={{ top: 4, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#26322d"
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              dy={8}
              tick={{
                fill: "#74807a",
                fontSize: 11,
                fontFamily: "var(--font-plex-mono)",
              }}
            />
            <YAxis hide domain={[0, "dataMax + 8"]} />
            <Tooltip
              cursor={{ fill: "rgba(62, 142, 140, 0.1)" }}
              contentStyle={{
                backgroundColor: "#141c19",
                border: "1px solid #26322d",
                borderRadius: 8,
                fontFamily: "var(--font-plex-mono)",
                fontSize: 12,
                color: "#e9e6de",
              }}
              labelStyle={{ color: "#9ca59f", marginBottom: 4 }}
              itemStyle={{ color: TEAL }}
            />
            <Bar dataKey="hours" radius={[5, 5, 0, 0]}>
              {heroChartData.map((entry, index) => (
                <Cell
                  key={entry.month}
                  fill={index === heroChartData.length - 1 ? GOLD : TEAL}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-4 font-mono text-[11px] text-faint">
        [dummy data] weekly hours logged toward the data track
      </p>
    </figure>
  );
}