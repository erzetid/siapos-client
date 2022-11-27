import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ContainerProps {
  title: string;
  sub?: string;
  link?: string;
  children?: ReactNode;
}

const Container: FC<ContainerProps> = ({ title, sub, link, children }) => {
  useEffect(() => {
    document.title = `Erzet Dropshipper App | ${title}`;
  }, [title]);
  return (
    <>
      <Breadcrumb spacing="8px" separator={<FiChevronRight color="gray.500" />}>
        <BreadcrumbItem>
          <Link to={link ? link : '#'}>
            <BreadcrumbLink fontSize={'2xl'} href={'#'}>
              {title}
            </BreadcrumbLink>
          </Link>
        </BreadcrumbItem>

        {sub && (
          <BreadcrumbItem>
            <BreadcrumbLink href="#">{sub}</BreadcrumbLink>
          </BreadcrumbItem>
        )}
      </Breadcrumb>
      {children}
    </>
  );
};

export default Container;
