"use client";
import { Fragment } from "react";
import { styled, Tooltip as TooltipBase } from "@mui/material";

interface Props {
  algorithm: string[];
  notes: string[];
}

export const Algorithm: React.FC<Props> = ({ algorithm, notes }) => {
  return (
    <>
      {notes.length > 0 ? (
        <Tooltip
          title={
            <span>
              {notes.map((note, i) => (
                <span key={note}>
                  {note}
                  {i !== notes.length - 1 && <br />}
                </span>
              ))}
            </span>
          }
        >
          <div>
            <AlgorithmContent algorithm={algorithm} />
          </div>
        </Tooltip>
      ) : (
        <AlgorithmContent algorithm={algorithm} />
      )}
    </>
  );
};

const AlgorithmContent = ({ algorithm }: { algorithm: string[] }) => {
  return (
    <>
      {algorithm.map((part, i) => (
        <Fragment key={part}>
          {part}
          {i !== algorithm.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  );
};

const Tooltip = styled(TooltipBase)({
  cursor: "help",
});
