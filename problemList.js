import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import rows from './problems';

import { Link } from 'react-router-dom';

var count1 = 0;

var t = rows;

rows = [];

for (let i = 0; i < 50; i++) {
  rows[i] = t[i];
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: 'bold',
    color: '#666666',
    borderBottom: '2px solid rgb(240, 240, 240)',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  [`&`]: {
    border: 'none',
    padding: '8px',
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgb(247, 248, 250)',
  },
}));

export default function ProblemList() {
  const [perPageNum, setPerPageNum] = React.useState(20);

  React.useEffect(() => {});

  const handlePerPageNumChange = () => {};

  const renderTags = (tags) => {
    let count = 0;
    return (
      <>
        {tags.map((tag) => {
          if (count >= 2) return;
          count++;
          return <Chip label={tag} variant="outlined" />;
        })}
      </>
    );
  };

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">状态</StyledTableCell>
              <StyledTableCell>名称</StyledTableCell>
              <StyledTableCell align="center">难度</StyledTableCell>
              <StyledTableCell align="center">标签</StyledTableCell>
              <StyledTableCell align="center">通过率</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <StyledTableRow key={idx}>
                <StyledTableCell align="center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </StyledTableCell>
                <StyledTableCell>
                  <Link to={`/problem/${idx}`}>{row.titleCn}</Link>
                </StyledTableCell>
                <StyledTableCell align="center">
                  {(() => {
                    if (row.difficulty == 'HARD')
                      return <div style={{ color: '#FA5151' }}>困难</div>;
                    if (row.difficulty == 'MEDIUM')
                      return <div style={{ color: '#FF8F1F' }}>中等</div>;
                    if (row.difficulty == 'EASY')
                      return <div style={{ color: '#00B578' }}>简单</div>;
                  })()}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {renderTags(row.tags)}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="none"
                    version="1.1"
                    width="94"
                    height="14"
                    viewBox="0 0 94 14"
                  >
                    <g>
                      <g>
                        <g>
                          <rect
                            x="2"
                            y="2"
                            width="90"
                            height="10"
                            rx="5"
                            fill="#F2F3F4"
                            fill-opacity="1"
                          />
                          <rect
                            x="1"
                            y="1"
                            width="92"
                            height="12"
                            rx="6"
                            fill-opacity="0"
                            stroke-opacity="0.30000001192092896"
                            stroke="#000000"
                            stroke-width="2"
                            fill="none"
                            stroke-dasharray=""
                          />
                        </g>
                        <g>
                          <rect
                            x="2"
                            y="2"
                            width="50"
                            height="10"
                            rx="5"
                            fill="#FFC300"
                            fill-opacity="1"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        paddingTop="30px"
      >
        <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
          <Select
            id="demo-simple-select-standard"
            value={perPageNum}
            onChange={handlePerPageNumChange}
          >
            <MenuItem value={20}>20 条/页</MenuItem>
            <MenuItem value={50}>50 条/页</MenuItem>
            <MenuItem value={100}>100 条/页</MenuItem>
          </Select>
        </FormControl>
        <Pagination count={10} shape="rounded" />
      </Stack>
    </>
  );
}
