import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

/**
 * @typedef {object} NavigationProps
 * @property {import("@prismicio/client").Content.NavigationDocument} navigation
 *
 * @param {NavigationProps}
 */
export function Navigation({ navigation }: any) {
  return (
    <nav>
      <ul className="flex justify-between space-x-8">
        {/* Renders top-level links. */}
        {prismic.isFilled.sliceZone(navigation.data.slices) &&
          navigation.data.slices.map((slice: any) => {
            return (
              <li key={slice.id}>
                <PrismicNextLink field={slice.primary.link}>
                  <PrismicText field={slice.primary.name} />
                </PrismicNextLink>

                {/* Renders child links, if present. */}
                {prismic.isFilled.group(slice.items) && (
                  <ul className="pl-6 pt-2">
                    {slice.items.map((item: any) => {
                      return (
                        <li key={prismic.asText(item.child_name)}>
                          <PrismicNextLink field={item.child_link}>
                            <PrismicText field={item.child_name} />
                          </PrismicNextLink>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
